import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const Div = styled.div`
  margin: 44px 0px 145px 0;
  font-family: Poppins;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #585858;
	@media ${device.mobile} {
		margin: 0 0 0 20px;
	}
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