import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../utils/device'

const Div = styled.div`
	margin: 30px 0 0 -45px;
	@media ${device.mobile} {
		margin: 0;
		visibility: hidden;
	}
`;

const Img = styled.img`
	width: 133px;
  height: 14px;
`

const LogoDarkText = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				logoDarkText {
					url
				}
			}
		}
`);

	return (
		<Div id='logoDarkText'>
			<Img src={data.cms.logoDarkText.url} />
		</Div>
	);
};

export default LogoDarkText;