import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: 1366px;
  width: 1366px;
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ gridColumns }) =>
    gridColumns ? gridColumns : '1fr 1fr'};
  grid-column-gap: ${({ gridGap }) => (gridGap ? gridGap : '80px')};
  @media only screen and (max-width: 1366px) {
    padding-right: ${({ paddingRightZero }) => paddingRightZero && '0'};
    max-width: 100%;
  }
  @media only screen and (max-width: 1194px) {
    padding: 60px 60px 60px 65px;
    padding-right: ${({ paddingRightZero }) => paddingRightZero && '0'};
    grid-column-gap: 30px;
  }
  @media only screen and (max-width: 990px) {
    padding: 0 20px;
    margin: 0;
    width: 60vw;
    grid-template-columns: unset;
    grid-template-rows: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 528px) {
    padding: 0;
    width: unset;
    max-width: 100%;
  }
`;
