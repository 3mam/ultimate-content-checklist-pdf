import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { FaFacebookF, FaInstagram, FaAngellist } from 'react-icons/fa';
const Div = styled.div`
  margin-left: 39px;
	display: flex;
	flex-direction: row;
`;

const Icon = styled.a`
  margin-right: 28px;
  padding: 15px;
  background-color: #eff0f1;
	border-radius: 50%;
	color: black;
	justify-content: center ;
	align-items: center;
`;

const SocialMediaLinks = () => {
	const data = useStaticQuery(graphql`
		{
			cms:datoCmsLandingPageContent {
				socialMediaLinks {
					link
				}
			}
		}
	`);
	const iconSize = 20;
	return (
		<Div>
			<Icon href={data.cms.socialMediaLinks[0].link}><FaFacebookF size={iconSize} /></Icon>
			<Icon href={data.cms.socialMediaLinks[1].link}><FaInstagram size={iconSize} /></Icon>
			<Icon href={data.cms.socialMediaLinks[2].link}><FaAngellist size={iconSize} /></Icon>
		</Div>
	);
};

export default SocialMediaLinks;