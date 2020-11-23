import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
	margin-right: -90px;
	margin-top: 30px;
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