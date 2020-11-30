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
import useCurrentWidth from '../hooks/useCurrentWidth';
import Ebook from '../components/section3/Ebook';
import AllInTitle from '../components/section3/AllInTitle';
import AllInParagraph from '../components/section3/AllInParagraph';
import { SectionA } from './what-can-you-learn-from-ebook';
import { SectionTitle, SectionEbook } from './all-in-one-content-checklist';
import WhatSectionTitle from '../components/section2/WhatSectionTitle';
import WhatSectionParagraph from '../components/section2/WhatSectionParagraph';
import Grid from '../components/section2/Grid';
import SocialMediaLinks from '../components/section2/SocialMediaLinks';

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

  @media only screen and (max-width: 990px) {
    margin-bottom: 15px;
  }
`;

const HomePage = () => {
  let width = useCurrentWidth();
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper padding="90px 120px 90px 135px">
          <Logo position="absolute" top="138px" left="95px" dark={false} />
          <SectionB>
            <HeroTitle />
            <HeroTextParagraph />
            <Email />
          </SectionB>
          <EbookCover />
        </ContentWrapper>
      </Wrapper>
      {width <= 990 && (
        <>
          <Wrapper bg="light">
            <ContentWrapper
              gridGap="50px"
              padding="90px 120px 90px 135px"
              paddingRightZero
              gridColumns="3fr 2fr"
              oneRow
            >
              <SectionA>
                <WhatSectionTitle />
                <WhatSectionParagraph />
                {width > 990 && <SocialMediaLinks />}
              </SectionA>
              {width > 990 && <Grid />}
            </ContentWrapper>
          </Wrapper>
          <Wrapper bg="light">
            <ContentWrapper
              gridGap="50px"
              padding="90px 120px 90px 135px"
              gridColumns="3fr 2fr"
              allIn
            >
              <SectionTitle>
                <AllInTitle />
                <AllInParagraph />
              </SectionTitle>
              <SectionEbook>
                <Ebook />
              </SectionEbook>
            </ContentWrapper>
          </Wrapper>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
