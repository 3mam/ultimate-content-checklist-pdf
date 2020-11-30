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
import useCurrentWidth from '../hooks/useCurrentWidth';
import { Flex } from './all-in-one-content-checklist';
import { Link } from 'gatsby';

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 990px) {
    flex-basis: auto;
  }
`;

export const SectionA = styled(Section)`
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 1440px) {
    justify-content: center;
    margin-bottom: 10%;
    margin-top: 0;
  }
  @media only screen and (max-width: 990px) {
    flex-basis: auto;
    padding: 40px 0 0;
  }
  @media only screen and (max-width: 590px) {
    padding: 40px 20px 0;
  }
`;

const LearnPage = () => {
  let width = useCurrentWidth();
  return (
    <>
      {width > 990 ? (
        <Layout>
          <Wrapper bg="light">
            <ContentWrapper
              gridGap="50px"
              padding="90px 120px 90px 135px"
              paddingRightZero
              gridColumns="3fr 2fr"
            >
              <Logo position="absolute" top="138px" left="95px" dark />
              <SectionA>
                <WhatSectionTitle />
                <WhatSectionParagraph />
                {width > 990 && <SocialMediaLinks />}
              </SectionA>
              {width > 990 && <Grid />}
            </ContentWrapper>
          </Wrapper>
        </Layout>
      ) : (
        <Flex>
          <Link to="/">&larr; The Ultimate Content Checklist</Link>
        </Flex>
      )}
    </>
  );
};

export default LearnPage;
