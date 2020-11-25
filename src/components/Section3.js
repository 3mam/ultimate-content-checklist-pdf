import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import LogoDarkText from './LogoDarkText';
import AllInTitle from '../components/section3/AllInTitle'
import AllInParagraph from '../components/section3/AllInParagraph'
import Ebook from './section3/Ebook';
import Dots from './Dots';
import device from '../utils/device';

const Div = styled.div`
	background-color: #ffffff;
	padding: 0 35px 100px 180px; 
	scroll-snap-align: start;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	@media ${device.mobile} {
		margin: 0 20px 0 0;
		padding: 0; 
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
		flex-direction: column;
	}
`;

const SectionA = styled(Section)`
	margin: 0 100px 0 0;
	flex-direction: column;
	@media ${device.mobile} {
		margin: 0;
	}
`;

const SectionB = styled(Section)`
	align-items: center;
`;

const StyleDots = styled.div`
	margin: 0 0 0 71px;
	@media ${device.mobile} {
		margin: 0;
		visibility: hidden;
	}
`;

const Section3 = () => {
	return (
		<Div id="section3">
			<Section>
				<SectionA>
					<LogoDarkText />
					<AllInTitle />
					<AllInParagraph />
				</SectionA>
				<SectionB>
					<Ebook />
					<StyleDots><Dots selectDot={2} /></StyleDots>
				</SectionB>
			</Section>
		</Div>
	);
};

export default Section3;