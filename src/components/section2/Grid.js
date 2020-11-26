import React from 'react';
import styled from 'styled-components';
import Dots from '../Dots';
import device from '../../utils/device';

const Div = styled.div`
	@media ${device.mobile} {
		display: none;
	}
`;

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

const Section = styled.section`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto;
`;

const Ebooks = styled(Cell)`
	margin: 0 0 0 0;
	width: 139px;
	height: 195px;
	grid-row: 1;
  grid-column: 1/3;
`;

const SocialMedia = styled(Cell)`
	margin: 101px 0 0 150px;
	width: 197px;
	height: 195px;
	grid-row: 1;
  grid-column:3/4;
`;

const Articles = styled(Cell)`
	margin: 0 0 0 100px;
	width: 208px;
	height: 292px;
	grid-row: 3;
  grid-column: 2/4;
`;

const StyleDots = styled.div`
	margin: 28px 34px 0 0;
	grid-row: 2;
	grid-column: 3;
	justify-self: end;
`;

const Gird = () => {
	return (
		<Div id='grid'>
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