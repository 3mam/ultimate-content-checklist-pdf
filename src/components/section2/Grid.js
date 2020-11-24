import React from 'react';
import styled from 'styled-components';
import Dots from '../Dots';
const Div = styled.div`
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
  color: #171717;
`;

const Section = styled.section`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto;
`;

const Ebooks = styled(Section)`
  margin: 0 0 126px 0px;
  padding: 84.5px 22.5px 82.5px;
	grid-row: 1;
  grid-column: 1/3;
	background-color: #00ef8b;
`;

const SocialMedia = styled(Section)`
  margin: 98px -20px 28px 100px;
  padding: 83px 26px 84px 27px;
	grid-row: 1;
  grid-column:3/4;
	background-color: #00ef8b;
`;

const Articles = styled(Section)`
  padding: 146px 54px 118px 55px;
	grid-row: 3;
  grid-column: 2/4;
	background-color: #00ef8b;
	margin-right: 159px;
`;

const StyleDots = styled.div`
	grid-row: 2;
	grid-column: 3;
	justify-self: end;
`;

const Gird = () => {

	return (
		<Div>
			<Section>
				<Ebooks>E-BOOKS</Ebooks>
				<SocialMedia>SOCIAL MEDIA</SocialMedia>
				<StyleDots><Dots selectDot={1} /></StyleDots>
				<Articles>ARTICLES</Articles>
			</Section>
		</Div>
	);
};

export default Gird;