import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { FaFacebookF, FaInstagram, FaAngellist } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Div = styled(motion.div)`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

const Icon = styled(motion.a)`
  margin-right: 28px;
  width: 46px;
  height: 46px;
  background-color: #eff0f1;
  border-radius: 50%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #00ef8b;
    transform: scale(1.05) translateY(-4px);
  }
`;

const SocialMediaLinks = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        socialMediaLinks {
          link
        }
      }
    }
  `);
  const iconSize = 20;
  return (
    <Div id="socialMediaLinks">
      <Icon
        whileTap={{ scale: 0.98 }}
        href={data.cms.socialMediaLinks[0].link}
        target="_blank"
      >
        <FaFacebookF size={iconSize} />
      </Icon>
      <Icon
        whileTap={{ scale: 0.98 }}
        href={data.cms.socialMediaLinks[1].link}
        target="_blank"
      >
        <FaInstagram size={iconSize} />
      </Icon>
      <Icon
        whileTap={{ scale: 0.98 }}
        href={data.cms.socialMediaLinks[2].link}
        target="_blank"
      >
        <FaAngellist size={iconSize} />
      </Icon>
    </Div>
  );
};

export default SocialMediaLinks;
