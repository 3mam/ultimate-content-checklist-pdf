import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
  margin: 51px 0 41px 39px;
  font-family: Poppins;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  text-align: left;
  color: #171717;
`;

const WhatSectionTitle = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				whatSectionTitle
			}
		}
	`);

	return (
		<Div>
			{data.cms.whatSectionTitle}
		</Div>
	);
};

export default WhatSectionTitle;