import React from 'react';
import styled from 'styled-components';
import EbookCover from '../components/section1/EbookCover';
import LogoLightText from '../components/LogoLightText';
import HeroTitle from '../components/section1/HeroTitle';
import HeroTextParagraph from '../components/section1/HeroTextParagraph';
import Email from '../components/section1/Email';
import device from '../utils/device';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Wrapper = styled.section`
  background-color: #171717;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1366px;
  margin: 0 150px 25px 135px;
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
`;

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

const SectionC = styled(Wrapper)`
  flex-direction: row;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <LogoLightText position="absolute" top="48px" left="-38px" />
          <SectionB>
            <HeroTitle />
            <HeroTextParagraph />
            <Email />
          </SectionB>
          <SectionC>
            <EbookCover />
          </SectionC>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default HomePage;
