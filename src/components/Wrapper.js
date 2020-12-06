import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ bg }) => (bg === 'light' ? '#ffffff' : '#171717')};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
