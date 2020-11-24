import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const Div = styled.div`
	display: flex;
	position: relative;

	@media ${device.mobile} {
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
	}
`;

const Button = styled.button`
	width: 135px;
  height: 100%;
  border-radius: 10px;
  background-color: #25eb98;
	@media ${device.mobile} {
		width: auto;
		height: 60px;
	}
`;

const Span = styled.span`
  position: absolute;
  opacity: 0.6;
  //top: 0;
  left: 20px;
	bottom: 23px;
	@media ${device.mobile} {
		bottom: 100px;
	}
  cursor: text;
  transition: all 0.5s ease-in-out ;
`;

const Input = styled.input`
  width: 310px;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
	margin: 0 14px 0 0;
	padding: 0 0 0 20px;
	font-size: 1.5em;
	@media ${device.mobile} {
		margin: 0 0 19px 0;
		width: auto;
	}

	&:not(:placeholder-shown) + ${Span.toString()},
	&:focus + ${Span.toString()} {
		opacity: 1;
		transform: translate(-10px, -45px);
		font-size: 0.8em;
		color: white;
		cursor: default;
	}	
`;

const Email = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				emailPlaceholder
				emailButtonText
				emailSuccessMessage
				emailErrorMessage
			}
		}
	`);

	return (
		<Div>
			<Input type="text" placeholder=" " />
			<Span>{data.cms.emailPlaceholder}</Span>
			<Button>{data.cms.emailButtonText}</Button >
		</Div>
	);
};

export default Email;