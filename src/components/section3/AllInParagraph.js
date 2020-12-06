import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const StyledParagraph = styled.div`
  margin: 44px 0px 145px 0;
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.44;
  text-align: left;
  color: #585858;
  max-width: 695px;
  @media only screen and (max-width: 990px) {
    margin: 16px 0 0;
    font-size: 16px;
  }
  @media only screen and (max-width: 590px) {
    max-width: calc(100% - 40px);
  }
`;

const AllInParagraph = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        allInParagraph
      }
    }
  `);

  return (
    <StyledParagraph
      id="allInParagraph"
      dangerouslySetInnerHTML={{ __html: data.cms.allInParagraph }}
    />
  );
};

export default AllInParagraph;
