import React from 'react';
import styled from 'styled-components';
import LogoDarkText from './LogoDarkText';
import AllInTitle from '../components/section3/AllInTitle'
import AllInParagraph from '../components/section3/AllInParagraph'
import Ebook from './section3/Ebook';
import Dots from './Dots';

const Background = styled.div`
  background-color: #ffffff;
`;

const Div = styled.div`
	margin: 0 310px 0 310px;
	padding: 100px 0 100px 0; 
`;

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-basis: 440px;
	flex-shrink: 0;
`;

const SectionA = styled(Section)`
	flex-direction: column;
`;

const SectionB = styled(Section)`
	align-items: center;
`;

const StyleDots = styled.div`
	margin: 0 0 0 71px;
`;

const Section3 = () => {
	return (
		<Background>
			<Div>
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