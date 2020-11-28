import React, { useRef } from 'react';
import styled from 'styled-components';
import LogoDarkText from '../components/LogoDarkText';
import SocialMediaLinks from '../components/section2/SocialMediaLinks';
import WhatSectionParagraph from '../components/section2/WhatSectionParagraph';
import WhatSectionTitle from '../components/section2/WhatSectionTitle';
import Grid from '../components/section2/Grid';
import device from '../utils/device';
import Layout from '../components/Layout';

const Div = styled.div`
  background-color: #ffffff;
  padding: 0 0 100px 180px;
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin: 0 0 50px 0;
    padding: 0 20px 0 0;
    width: auto;
    height: auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-basis: 1000px;
  @media ${device.mobile} {
    flex-basis: auto;
  }
`;

const SectionA = styled(Section)`
  flex-direction: column;
  @media ${device.mobile} {
    flex-basis: auto;
  }
`;
const SectionB = styled(Section)`
  flex-direction: column;
  justify-content: center;
`;

const OnMobile = styled(Section)`
  justify-content: flex-start;
  align-items: center;
  @media ${device.mobile} {
    visibility: hidden;
    position: absolute;
    //margin: 0 -460px -100px 0;
    padding: 0;
  }
`;

const LearnPage = () => {
  return (
    <Layout>
      <Div id="section2">
        <Section>
          <SectionA>
            <LogoDarkText />
            <WhatSectionTitle />
            <WhatSectionParagraph />
            <SocialMediaLinks />
          </SectionA>
          <SectionB>
            <Grid />
          </SectionB>
        </Section>
      </Div>
    </Layout>
  );
};

export default LearnPage;
