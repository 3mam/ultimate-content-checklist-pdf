import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
	margin-bottom: 44px;
`;

const HeroTextParagraph = () => {
	const data = useStaticQuery(graphql`
	{
		cms:datoCmsLandingPageContent {
			heroTextParagraph
		}
	}
	`);

	return (
		<Div id='heroTextParagraph'>
			{data.cms.heroTextParagraph}
		</Div>
	);
};

export default HeroTextParagraph;