import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import useCurrentWidth from '../../hooks/useCurrentWidth';

const Div = styled.div`
  background-color: #171717;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #25eb98;
  border: none;
  padding: 12px 53px 12px 54px;
  font-size: 15px;
  line-height: 1.47em;
  margin: 0 0 30px;
`;

const EbookTitle = styled.p`
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
  max-width: 253px;
`;

const Cover = styled(Img)`
  margin: 0 51px 0 51px;
  @media only screen and (max-width: 1366px) {
    width: 212px !important;
  }
  img,
  picture {
    width: 100%;
    object-fit: cover;
  }
`;

const Ebook = () => {
  let width = useCurrentWidth();
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        bigger: ebookGraphic {
          fixed(
            width: 297
            forceBlurhash: false
            imgixParams: { fm: "png", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
        smaller: ebookGraphic {
          fixed(
            width: 212
            forceBlurhash: false
            imgixParams: { fm: "png", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
        ebookTitle
        ebookBtnText
      }
    }
  `);

  return (
    <Div id="ebook">
      <Section>
        <EbookTitle>{data.cms.ebookTitle}</EbookTitle>
        <Cover
          fixed={width > 1366 ? data.cms.bigger.fixed : data.cms.smaller.fixed}
        />
        <Button>{data.cms.ebookBtnText}</Button>
      </Section>
    </Div>
  );
};

export default Ebook;
