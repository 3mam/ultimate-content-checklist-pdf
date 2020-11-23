import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Background = styled.div`
  background-color: #171717;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
  width: 189px;
  height: 45px;
  border-radius: 10px;
  background-color: #25eb98;
	margin: 0 63px 30px 63px;
`;

const EbookTitle = styled.div`
  margin: 51px 34px 29px 34px;
  font-family: Poppins;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

const Cover = styled(Img)`
	margin: 0 51px 0 51px;
`;

const Ebook = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				ebookGraphic {
					fixed(width: 212, forceBlurhash: false, imgixParams: { fm: "png", auto: "compress" }) {
						...GatsbyDatoCmsFixed
					}
				}
				ebookTitle
				ebookBtnText
			}
		}
`);

	return (
		<Background>
			<Section>
				<EbookTitle>{data.cms.ebookTitle}</EbookTitle>
				<Cover fixed={data.cms.ebookGraphic.fixed} />
				<Button>{data.cms.ebookBtnText}</Button >
			</Section>
		</Background>
	);
};

export default Ebook;