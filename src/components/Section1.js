import React from 'react';
import styled from 'styled-components';
import Dots from './Dots'
import EbookCover from './section1/EbookCover';
import LogoLightText from './LogoLightText';
import HeroTitle from './section1/HeroTitle'
import HeroTextParagraph from './section1/HeroTextParagraph'
import Email from './section1/Email'

const Background = styled.div`
	background-color: #171717;
`;

const Div = styled.div`
	margin: 0 310px 0 310px;
	padding: 100px 0 100px 0; 
`;

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

const SectionA = styled(Section)`
	flex-direction: column;
	margin-bottom: 100px;
`;

const SectionB = styled(Section)`
	align-items: center;
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
						<Dots selectDot={0} />
					</SectionB>
				</Section>
			</Div>
		</Background>
	);
};

export default Section1;