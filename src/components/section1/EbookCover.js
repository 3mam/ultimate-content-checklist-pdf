import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Div = styled.div`
	max-width: 100%;
	max-height: 100%;
  width: 531px;
  height: 795px;
	margin: 0 104px 0 0;
`;

const EbookCover = () => {
	const data = useStaticQuery(graphql`
		{
		cms:datoCmsLandingPageContent {
				ebookCover {
					fluid(maxWidth: 531, forceBlurhash: false, imgixParams: { fm: "png", auto: "compress" }) {
						...GatsbyDatoCmsFluid
					}
				}
			}
		}
	`);

	return (
		<Div>
			<Img fluid={data.cms.ebookCover.fluid} />
		</Div>
	);
};

export default EbookCover;
