import React from 'react';
import styled from 'styled-components';
import EbookCover from '../components/section1/EbookCover';
import LogoLight from '../components/Logo';
import HeroTitle from '../components/section1/HeroTitle';
import HeroTextParagraph from '../components/section1/HeroTextParagraph';
import Email from '../components/section1/Email';
import device from '../utils/device';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Wrapper } from '../components/Wrapper';
import { ContentWrapper } from '../components/ContentWrapper';
import Logo from '../components/Logo';

const SectionB = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  h1 {
    max-width: 404px;
  }
  p {
    max-width: 506px;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <Logo position="absolute" top="48px" left="-32px" dark={false} />
          <SectionB>
            <HeroTitle />
            <HeroTextParagraph />
            <Email />
          </SectionB>
          <EbookCover />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default HomePage;
