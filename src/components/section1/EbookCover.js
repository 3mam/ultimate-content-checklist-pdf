import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import device from '../../utils/device';

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 5%;
  .gatsby-image-wrapper {
    width: 100%;
    @media only screen and (max-width: 990px) {
      width: 85%;
      min-width: 260px;
      max-width: 380px;
    }
    @media only screen and (max-width: 590px) {
      min-width: 200px;
      max-width: calc(100% - 40px);
    }
  }

  @media only screen and (max-width: 990px) {
    justify-content: center;
    align-items: center;
    margin: 0 0 15px;
    width: 100%;
    max-width: 505px;
    height: auto;
  }
  @media only screen and (max-width: 590px) {
    max-width: calc(100% - 40px);
  }
`;

const EbookCover = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        ebookCover {
          fluid(
            maxWidth: 531
            forceBlurhash: false
            imgixParams: { fm: "png", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `);

  return (
    <Div id="ebookCover">
      <Img fluid={data.cms.ebookCover.fluid} />
    </Div>
  );
};

export default EbookCover;
