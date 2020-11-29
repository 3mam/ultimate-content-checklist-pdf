import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Img = styled.img`
  width: 133px;
  height: 14px;
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  @media only screen and (max-width: 1194px) {
    left: ${({ left }) => left && `${+left.split('px')[0] - 50}px`};
  }
  margin: ${({ margin }) => margin};
  z-index: 1;
`;

const Logo = ({ position, top, left, learnLeft1515, margin, dark }) => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        logoLightText {
          url
        }
        logoDarkText {
          url
        }
      }
    }
  `);

  return (
    <Img
      position={position}
      top={top}
      left={left}
      margin={margin}
      src={dark ? data.cms.logoDarkText.url : data.cms.logoLightText.url}
    />
  );
};

export default Logo;
