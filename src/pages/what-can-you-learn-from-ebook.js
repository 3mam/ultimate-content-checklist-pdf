import React, { useRef } from 'react';
import styled from 'styled-components';
import LogoDark from '../components/Logo';
import SocialMediaLinks from '../components/section2/SocialMediaLinks';
import WhatSectionParagraph from '../components/section2/WhatSectionParagraph';
import WhatSectionTitle from '../components/section2/WhatSectionTitle';
import Grid from '../components/section2/Grid';
import device from '../utils/device';
import Layout from '../components/Layout';
import { Wrapper } from '../components/Wrapper';
import { ContentWrapper } from '../components/ContentWrapper';
import Logo from '../components/Logo';

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.mobile} {
    flex-basis: auto;
  }
`;

const SectionA = styled(Section)`
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10%;
  @media only screen and (min-width: 1440px) {
    justify-content: center;
    margin-bottom: 10%;
    margin-top: 0;
  }
  @media ${device.mobile} {
    flex-basis: auto;
  }
`;

const LearnPage = () => {
  return (
    <Layout>
      <Wrapper bg="light">
        <ContentWrapper
          gridGap="50px"
          margin="0 0 0 135px"
          gridColumns="3fr 2fr"
        >
          <Logo position="absolute" top="48px" left="-32px" dark />
          <SectionA>
            <WhatSectionTitle />
            <WhatSectionParagraph />
            <SocialMediaLinks />
          </SectionA>
          <Grid />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default LearnPage;
