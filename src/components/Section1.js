import React from 'react';
import styled from 'styled-components';
import Dots from './Dots'
import EbookCover from './section1/EbookCover';
import LogoLightText from './LogoLightText';
import HeroTitle from './section1/HeroTitle'
import HeroTextParagraph from './section1/HeroTextParagraph'
import Email from './section1/Email'
import device from '../utils/device'

const Background = styled.div`
	background-color: #171717;
`;

const Div = styled.div`
	padding: 0 33px 0 136px; 
	@media ${device.mobile} {
		margin: 0 0 50px 0;
		padding: 0 20px 0 20px;
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
	flex-direction: column;
`;

const SectionB = styled(Section)`
	align-items: center;
	@media ${device.mobile} {
		flex-direction: row;
		justify-content: center;
  	align-items: flex-start;
	}
`;

const StyleDots = styled.div`
	margin: 0 0 0 55px;
	@media ${device.mobile} {
		margin: 0;
		visibility: hidden;
	}
`;

const Section1 = () => {

	return (
		<Background>
			<Div>
				<Section>
					<LogoLightText />
					<SectionA>
						<HeroTitle />
						<HeroTextParagraph />
						<Email />
					</SectionA>
					<SectionB>
						<EbookCover />
						<StyleDots><Dots selectDot={0} /></StyleDots>
					</SectionB>
				</Section>
			</Div>
		</Background>
	);
};

export default Section1;