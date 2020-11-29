import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';

const StyledHeader = styled(motion.h1)`
  font-family: Poppins;
  font-size: 62px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 26px;
  max-width: 404px;
  @media only screen and (max-width: 1194px) {
    font-size: 50px;
  }
`;

const HeroTitle = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        heroTitle
      }
    }
  `);

  return <StyledHeader>{data.cms.heroTitle}</StyledHeader>;
};

export default HeroTitle;
