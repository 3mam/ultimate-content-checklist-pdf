import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';

const StyledParagraph = styled(motion.p)`
  font-family: Poppins;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 44px;
`;

const HeroTextParagraph = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        heroTextParagraph
      }
    }
  `);

  return <StyledParagraph>{data.cms.heroTextParagraph}</StyledParagraph>;
};

export default HeroTextParagraph;
