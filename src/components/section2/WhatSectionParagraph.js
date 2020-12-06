import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const StyledParagraph = styled.p`
  margin: 0 0 49px 0;
  font-family: Poppins;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #585858;
  max-width: 754px;
  @media only screen and (max-width: 990px) {
    margin: 16px 0 56px;
    font-size: 16px;
  }
  @media only screen and (max-width: 590px) {
    max-width: unset;
  }
`;

const WhatSectionParagraph = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        whatSectionParagraph
      }
    }
  `);

  return (
    <StyledParagraph
      id="whatSectionParagraph"
      dangerouslySetInnerHTML={{ __html: data.cms.whatSectionParagraph }}
    />
  );
};

export default WhatSectionParagraph;
