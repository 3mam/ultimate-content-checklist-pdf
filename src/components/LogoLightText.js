import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
	margin: 30px -90px 0 0;
`;

const Img = styled.img`
	width: 133px;
  height: 14px;
`

const LogoLightText = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				logoLightText {
					url
				}
			}
		}
`);

	return (
		<Div>
			<Img src={data.cms.logoLightText.url} />
		</Div>
	);
};

export default LogoLightText;