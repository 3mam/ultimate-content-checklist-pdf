import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';
import { AnimatePresence, motion } from 'framer-motion';

const Form = styled(motion.form)`
  display: flex;
  position: relative;
  @media only screen and (max-width: 990px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    max-width: 505px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
`;

const Button = styled(motion.button)`
  width: 135px;
  height: 100%;
  margin-left: 14px;
  font-size: 16px;
  line-height: 1.47em;
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover:not(:focus) {
    box-shadow: 0 0 0pt 1pt #00ef8b;
  }

  @media only screen and (max-width: 990px) {
    width: auto;
    height: 60px;
    margin-left: 0;
  }
`;

const Span = styled.span`
  position: absolute;
  opacity: 0;
  left: 20px;
  bottom: 23px;
  font-family: 'Poppins';
  color: white;
  @media only screen and (max-width: 990px) {
    bottom: 41px;
  }
  cursor: text;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Input = styled.input`
  width: 310px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.47em;
  text-align: center;
  font-family: 'Poppins';
  color: #171717;
  transition: box-shadow 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:focus {
    outline: none;
    box-shadow: 0 0 1pt 2pt #00ef8b;
  }
  &:hover:not(:focus) {
    box-shadow: 0 0 0pt 1pt #00ef8b;
  }
  @media only screen and (max-width: 990px) {
    margin: 0 0 19px 0;
    width: auto;
  }

  &:not(:placeholder-shown) + ${Span.toString()}, &:focus + ${Span.toString()} {
    opacity: 1;
    transform: translate(-10px, -45px);
    font-size: 0.8em;
    color: #00ef8b;
    cursor: default;
  }
`;

const LoaderStyles = styled(motion.span)`
  width: 16px;
  height: 16px;
  border-top: 1px solid var(--accent);
  background-color: var(--accent);
  z-index: 2;
  position: absolute;
  right: 0;
`;

const MessageStyles = styled(motion.p)`
  font-size: 14px;
  line-height: 1.3em;
  font-family: 'Poppins';
  color: ${({ error }) => (error ? '' : '#fff')};
  position: absolute;
  left: 0;
  bottom: -66px;
`;

const Email = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);

  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        emailPlaceholder
        emailButtonText
        emailSuccessMessage
        emailErrorMessage
      }
    }
  `);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (counter < 4) {
      setLoading(true);
      const email = e.target.children[0].children[0].value;
      const header = new Headers();
      header.append('email', email);
      const request = new Request('.netlify/functions/email', {
        method: 'GET',
        headers: header,
      });
      fetch(request).then((data) => {
        console.log(data);
        if (data.ok) {
          setError(false);
          setMessage(
            '💪 Thank you! Now check your email and confirm your subscription. 🚀',
          );
          setLoading(false);
          setCounter(counter + 1);
        } else {
          setError(true);
          setMessage('Something went wrong, try again, please! 😄');
          setLoading(false);
        }
      });
    } else {
      setMessage('Whoooah! You really like our newsletter! Thanks! 🤭');
      setLoading(false);
      setError(false);
    }
  };

  return (
    <Form id="email" onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder={data.cms.emailPlaceholder}
          required
        />
        <Span>email</Span>
      </Label>
      <Button disabled={counter >= 3} whileTap={{ scale: 0.9 }} type="submit">
        {data.cms.emailButtonText}
      </Button>
      <AnimatePresence>
        {loading && (
          <LoaderStyles
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 359 }}
            exit={{ opacity: 0, scale: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {message && (
          <MessageStyles
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {message}
          </MessageStyles>
        )}
      </AnimatePresence>
    </Form>
  );
};

export default Email;
