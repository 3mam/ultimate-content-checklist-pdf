import React, { useRef } from 'react';
import styled from 'styled-components';
import LogoDarkText from './LogoDarkText';
import SocialMediaLinks from './section2/SocialMediaLinks';
import WhatSectionParagraph from './section2/WhatSectionParagraph';
import WhatSectionTitle from './section2/WhatSectionTitle';
import Grid from './section2/Grid';
import device from '../utils/device';

const Div = styled.div`
	background-color: #ffffff;
	padding: 0 0 100px 180px; 
	scroll-snap-align: start;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	@media ${device.mobile} {
		margin: 0 0 50px 0;
		padding: 0 20px 0 0;
		width: auto;
		height: auto;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-basis: 1000px;
	@media ${device.mobile} {
		flex-basis: auto;
	}
`;

const SectionA = styled(Section)`
	flex-direction: column;
	@media ${device.mobile} {
	flex-basis: auto;
	}																												 
`;
const SectionB = styled(Section)`
	flex-direction: column;
	justify-content: center;																					 
`;

const OnMobile = styled(Section)`
	justify-content: flex-start;
	align-items:center;
	@media ${device.mobile} {
		visibility: hidden;
		position:absolute;
		//margin: 0 -460px -100px 0;
		padding: 0;
	}
`;

const Section2 = () => {
	return (
		<Div id="section2">
			<Section>
				<SectionA>
					<LogoDarkText />
					<WhatSectionTitle />
					<WhatSectionParagraph />
					<SocialMediaLinks />
				</SectionA>
				<SectionB>
					<Grid />
				</SectionB>
			</Section>
		</Div>
	);
};

export default Section2;