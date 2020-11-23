import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
  font-family: Poppins;
  font-size: 62px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
	margin-bottom: 26px;
`;

const HeroTitle = () => {
	const data = useStaticQuery(graphql`
	{
		cms:datoCmsLandingPageContent {
			heroTitle
		}
	}
	`);

	return (
		<Div>
			{data.cms.heroTitle}
		</Div>
	);
};

export default HeroTitle;