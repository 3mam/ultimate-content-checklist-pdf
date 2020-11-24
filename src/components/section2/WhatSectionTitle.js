import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const Div = styled.div`
  margin: 51px 0 41px 0;
  font-family: Poppins;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  text-align: left;
  color: #171717;
	@media ${device.mobile} {
		margin: 0 0 0 20px;
	}
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