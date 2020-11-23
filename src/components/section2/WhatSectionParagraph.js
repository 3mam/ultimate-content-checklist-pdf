import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
  margin: 0 0 49px 39px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #585858;
`;

const WhatSectionParagraph = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				whatSectionParagraph
			}
		}
	`);

	const htmlString = { __html: data.cms.whatSectionParagraph }

	return (
		<Div dangerouslySetInnerHTML={htmlString} />
	);
};

export default WhatSectionParagraph;