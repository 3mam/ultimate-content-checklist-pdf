import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
  margin: 44px 0px 145px 42px;
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

const AllInParagraph = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				allInParagraph
			}
		}
	`);

	const htmlString = { __html: data.cms.allInParagraph }

	return (
		<Div dangerouslySetInnerHTML={htmlString} />
	);
};

export default AllInParagraph;