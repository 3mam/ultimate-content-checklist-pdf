import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const Div = styled.div`
  margin: 128px 0 0 0;
  font-family: Poppins;
  font-size: 62px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: #171717;
  @media only screen and (max-width: 1194px) {
    font-size: 47px;
  }
  @media only screen and (max-width: 990px) {
    font-size: 26px;
    margin: 0;
  }
`;

const AllInTitle = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        allInTitle
      }
    }
  `);

  return <Div id="allInTitle">{data.cms.allInTitle}</Div>;
};

export default AllInTitle;
