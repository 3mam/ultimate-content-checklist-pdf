import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';
import { motion } from 'framer-motion';

const Form = styled.form`
  display: flex;
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

const Email = () => {
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
    console.log(e.target);
  };

  return (
    <Form id="email" onSubmit={handleSubmit}>
      <Label>
        <Input type="text" placeholder={data.cms.emailPlaceholder} />
        <Span>email</Span>
      </Label>
      <Button whileTap={{ scale: 0.9 }} type="submit">
        {data.cms.emailButtonText}
      </Button>
    </Form>
  );
};

export default Email;
