import React from 'react';
import styled from 'styled-components';
import LogoDarkText from './LogoDarkText';
import SocialMediaLinks from './section2/SocialMediaLinks';
import WhatSectionParagraph from './section2/WhatSectionParagraph';
import WhatSectionTitle from './section2/WhatSectionTitle';
import Grid from './section2/Grid';

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

`;

const SectionA = styled(Section)`
	flex-direction: column;
`;

const SectionB = styled(Section)`

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
						<SocialMediaLinks />
					</SectionA>
					<SectionB>
						<Grid />
					</SectionB>
				</Section>
			</Div>
		</Background>
	);
};

export default Section2;