import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const StyledHeader = styled.h2`
  margin: 51px 0 41px 0;
  font-family: Poppins;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  text-align: left;
  color: #171717;
  @media only screen and (max-width: 1409px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 990px) {
    font-size: 26px;
    margin: 0;
  }
`;

const WhatSectionTitle = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        whatSectionTitle
      }
    }
  `);

  return (
    <StyledHeader id="whatSectionTitle">
      {data.cms.whatSectionTitle}
    </StyledHeader>
  );
};

export default WhatSectionTitle;
