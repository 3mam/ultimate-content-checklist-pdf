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
    height: 100%;
  }

  @media ${device.mobile} {
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: auto;
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
