import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const StyledParagraph = styled.p`
  margin: 44px 0px 145px 0;
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.44;
  text-align: left;
  color: #585858;
  max-width: 695px;
  @media ${device.mobile} {
    margin: 0 0 0 20px;
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

  const htmlString = { __html: data.cms.allInParagraph };

  return (
    <StyledParagraph id="allInParagraph" dangerouslySetInnerHTML={htmlString} />
  );
};

export default AllInParagraph;
