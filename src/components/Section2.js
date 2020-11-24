import React from 'react';
import styled from 'styled-components';
import LogoDarkText from './LogoDarkText';
import SocialMediaLinks from './section2/SocialMediaLinks';
import WhatSectionParagraph from './section2/WhatSectionParagraph';
import WhatSectionTitle from './section2/WhatSectionTitle';
import Grid from './section2/Grid';
import device from '../utils/device';

const Background = styled.div`
  background-color: #ffffff;
`;

const Div = styled.div`
	padding: 100px 0 100px 180px; 
	@media ${device.mobile} {
		margin: 0;
		padding: 0; 
	}
`;

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

const SectionA = styled(Section)`
	flex-direction: column;
	margin: 0 0 0 0;
	@media ${device.mobile} {
	flex-basis: auto;
	flex-shrink: 3;
	}																												 
`;

const OnMobile = styled(Section)`
	justify-content: flex-start;
	@media ${device.mobile} {
		visibility: hidden;
		margin: 0 -400px 0 0;
		padding: 0;
	}
`;

const Section2 = () => {
	return (
		<Background>
			<Div>
				<Section>
					<SectionA>
						<LogoDarkText />
						<WhatSectionTitle />
						<WhatSectionParagraph />
						<OnMobile>
							<SocialMediaLinks />
						</OnMobile>
					</SectionA>
					<OnMobile>
						<Grid />
					</OnMobile>
				</Section>
			</Div>
		</Background>
	);
};

export default Section2;