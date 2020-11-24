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
	margin: 0 310px 0 310px;
	padding: 100px 0 100px 0; 
	@media ${device.mobile} {
		margin: 0;
		padding: 0 20px 0 20px;
	}
`;

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-basis: 500px;
	flex-shrink: 0;
	@media ${device.mobile} {
		flex-direction: column;
	}
`;

const SectionA = styled(Section)`
	flex-direction: column;
	margin: 0 0 100px 0;
`;

const SectionB = styled(Section)`
	align-items: center;
	@media ${device.mobile} {
		flex-direction: row;
	}
`;

const StyleDots = styled.div`
	@media ${device.mobile} {
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