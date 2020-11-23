import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Div = styled.div`
	margin-right: 104px;
`;

const EbookCover = () => {
	const data = useStaticQuery(graphql`
		{
		cms:datoCmsLandingPageContent {
				ebookCover {
					fixed(width: 531, forceBlurhash: false, imgixParams: { fm: "png", auto: "compress" }) {
						...GatsbyDatoCmsFixed
					}
				}
			}
		}
	`);

	return (
		<Div>
			<Img fixed={data.cms.ebookCover.fixed} />
		</Div>
	);
};

export default EbookCover;
