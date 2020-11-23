import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`

`;

const Button = styled.button`
	width: 135px;
  height: 60px;
  border-radius: 10px;
  background-color: #25eb98;
`;

const Input = styled.input`
  width: 310px;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
	margin-right: 14px;
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