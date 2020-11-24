import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const Div = styled.div`
		display: flex;
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

const Input = styled.input`
  width: 310px;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
	margin: 0 14px 0 0;
	@media ${device.mobile} {
		margin: 0 0 19px 0;
		width: auto;
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
			<Input placeholder={data.cms.emailPlaceholder} />
			<Button>{data.cms.emailButtonText}</Button >
		</Div>
	);
};

export default Email;