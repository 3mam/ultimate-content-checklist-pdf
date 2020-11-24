import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Div = styled.div`
	margin-right: -90px;
	margin-top: 30px;
	@media screen and (max-width: 1100px) {
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
		<Div>
			<Img src={data.cms.logoDarkText.url} />
		</Div>
	);
};

export default LogoDarkText;