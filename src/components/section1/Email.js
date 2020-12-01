import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
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

  @media only screen and (max-width: 990px) {
    max-width: calc(100% - 40px);
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
`;

export const Button = styled(motion.button)`
  height: 100%;
  margin-left: 14px;
  font-size: 16px;
  line-height: 1.47em;
  cursor: pointer;
  padding: 10px 16px;
  transition: box-shadow 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  min-width: 130px;

  &:hover:not(:focus) {
    box-shadow: 0 0 0pt 1pt #00ef8b;
  }

  @media only screen and (max-width: 990px) {
    width: auto;
    height: 60px;
    margin-left: 0;
  }

  @media only screen and (max-width: 590px) {
    margin-bottom: 36px;
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

export const Input = styled(motion.input)`
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.47em;
  text-align: left;
  padding: 0px 18px;
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

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderStyles = styled(motion.span)`
  width: 24px;
  height: 24px;
  border-top: 2px solid ${({ mobile }) => (mobile ? '#fff' : '#fff')};
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  left: 0;
  bottom: -46px;
  @media only screen and (max-width: 590px) {
    bottom: -20px;
  }
  ${({ relative }) =>
		relative &&
		css`
      left: calc(50% - 20px);
      bottom: 120px;
    `}
  animation: ${rotateAnimation} 1s infinite forwards;
  ${({ mobile }) =>
		mobile &&
		css`
      left: calc(50% - 20px);
      bottom: 120px;
    `}
`;

export const MessageStyles = styled(motion.p)`
  font-size: 13px;
  line-height: 1.3em;
  font-family: 'Poppins';
  color: ${({ error }) => (error ? '#e42020' : '#fff')};
  position: absolute;
  left: 0;
  bottom: -46px;
  ${({ relative }) =>
		relative &&
		css`
      text-align: center;
      bottom: 30%;
      margin: 0 20px;
      left: 10px;
    `}

  @media only screen and (max-width: 590px) {
    bottom: -20px;
    text-align: center;
    max-width: 100%;
    left: 20px;
    ${({ mobile }) =>
		mobile &&
		css`
        bottom: 30%;
        margin: 0 20px;
        left: 0;
      `}
  }
`;

const Email = () => {
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(true);
	const [counter, setCounter] = useState(0);
	const [emailInput, setEmailInput] = useState('');

	const handleInputChange = (e) => {
		setEmailInput(e.target.value);
	};

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
		setLoading(true);
		setTimeout(() => {
			if (counter < 4) {
				const email = emailInput;
				console.log(email);
				const data = new FormData();
				data.append('email', email)
				console.log(data);
				const request = new Request('.netlify/functions/email', {
					method: 'GET',
					body: data,
				});
				fetch(request).then((data) => {
					console.log(data);

					setCounter(counter + 1);
					if (data.status === 200) {
						setError(false);
						setMessage(
							'Thank you! Now check your email and confirm your subscription. 🚀',
						);
						setLoading(false);
						setTimeout(() => {
							setMessage('');
						}, 15000);
					} else {
						setError(true);
						setMessage('Something went wrong, try again, please.');
						setLoading(false);
						setTimeout(() => {
							setMessage('');
						}, 15000);
					}
				});
			} else {
				setMessage('Whoooah! You really like our newsletter! Thanks! 🤭');
				setLoading(false);
				setError(false);
				setTimeout(() => {
					setMessage('');
				}, 15000);
			}
		}, 5000);
	};

	return (
		<Form id="email" onSubmit={handleSubmit}>
			<Label>
				<Input
					type="text"
					pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					placeholder={data.cms.emailPlaceholder}
					required
					value={emailInput}
					onChange={(e) => handleInputChange(e)}
					disabled={loading}
				/>
				<Span>email</Span>
			</Label>
			<Button disabled={loading} whileTap={{ scale: 0.9 }} type="submit">
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
						exit={{ opacity: 0, y: 8 }}
						error={error}
					>
						{message}
					</MessageStyles>
				)}
			</AnimatePresence>
		</Form>
	);
};

export default Email;
