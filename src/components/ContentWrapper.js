import React from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: 1366px;
  width: 1366px;
  margin: ${({ margin }) => (margin ? margin : '0 150px 25px 135px')};
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ gridColumns }) =>
    gridColumns ? gridColumns : '1fr 1fr'};
  grid-column-gap: ${({ gridGap }) => (gridGap ? gridGap : '80px')};
`;
