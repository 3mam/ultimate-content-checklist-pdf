import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Img = styled.img`
  width: 133px;
  height: 14px;
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};
  z-index: 1;
`;

const LogoLightText = ({ position, top, left, margin }) => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        logoLightText {
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
      src={data.cms.logoLightText.url}
    />
  );
};

export default LogoLightText;
