import React, { useRef } from 'react';
import styled from 'styled-components';
import Dots from './Dots'
import EbookCover from './section1/EbookCover';
import LogoLightText from './LogoLightText';
import HeroTitle from './section1/HeroTitle'
import HeroTextParagraph from './section1/HeroTextParagraph'
import Email from './section1/Email'
import device from '../utils/device'

const Div = styled.div`
	background-color: #171717;
	padding: 0 0 100px 170px; 

	scroll-snap-align: start;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	
	@media ${device.mobile} {
		margin: 0 0 50px 0;
		padding: 0 20px 0 20px;
		width: auto;
		height: auto;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: row;
	margin: 0;
	flex-basis: 1000px;
	@media ${device.mobile} {
		flex-direction: column;
		flex-basis: auto;
	}
`;

const SectionA = styled(Section)`
	position: absolute;
	margin: -650px 0 0 0;
`;

const SectionB = styled(Section)`
	flex-direction: column;
	justify-content: center;

`;

const SectionC = styled(Section)`
	flex-direction: row;
	align-items: center;
	@media ${device.mobile} {
		flex-direction: row;
		justify-content: center;
  	align-items: flex-start;
	}
`;

const StyleDots = styled.div`
	margin: 0;
	@media ${device.mobile} {
		display: none;
	}
`;

const Section1 = () => {

	return (
		<Div id="section1">
			<Section>
				<SectionB>
					<SectionA>
						<LogoLightText />
					</SectionA>
					<HeroTitle />
					<HeroTextParagraph />
					<Email />
				</SectionB>
				<SectionC>
					<EbookCover />
					<StyleDots><Dots selectDot={0} /></StyleDots>
				</SectionC>
			</Section>
		</Div>
	);
};

export default Section1;