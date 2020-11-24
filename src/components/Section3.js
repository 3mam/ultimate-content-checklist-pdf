import React from 'react';
import styled from 'styled-components';
import LogoDarkText from './LogoDarkText';
import AllInTitle from '../components/section3/AllInTitle'
import AllInParagraph from '../components/section3/AllInParagraph'
import Ebook from './section3/Ebook';
import Dots from './Dots';
import device from '../utils/device';

const Background = styled.div`
  background-color: #ffffff;
`;

const Div = styled.div`
	padding: 0 35px 100px 180px; 
	@media ${device.mobile} {
		margin: 0 20px 0 0;
		padding: 0; 
	}
`;

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
	@media ${device.mobile} {
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
		<Background>
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
		</Background>
	);
};

export default Section3;