import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: #00000000;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;

  background-color: #00ef8b;
  color: #171717;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
`;

const Ebooks = styled(Cell)`
  grid-row: 1/5;
  grid-column: 1/7;
`;

const SocialMedia = styled(Cell)`
  grid-row: 3/7;
  grid-column: 10/17;
`;

const Articles = styled(Cell)`
  grid-row: 11/17;
  grid-column: 3/11;
`;

const Gird = () => {
  return (
    <GridStyles>
      <Ebooks>E-BOOKS</Ebooks>
      <SocialMedia>SOCIAL MEDIA</SocialMedia>
      <Articles>ARTICLES</Articles>
    </GridStyles>
  );
};

export default Gird;
