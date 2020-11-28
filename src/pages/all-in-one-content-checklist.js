import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import LogoDark from '../components/Logo';
import AllInTitle from '../components/section3/AllInTitle';
import AllInParagraph from '../components/section3/AllInParagraph';
import Ebook from '../components/section3/Ebook';
import device from '../utils/device';
import Layout from '../components/Layout';
import { Wrapper } from '../components/Wrapper';
import { ContentWrapper } from '../components/ContentWrapper';
import Logo from '../components/Logo';

const Div = styled.div`
  background-color: #ffffff;
  padding: 0 35px 100px 180px;
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin: 0 20px 0 0;
    padding: 0;
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
    flex-direction: column;
  }
`;

const SectionA = styled(Section)`
  margin: 0 100px 0 0;
  flex-direction: column;
  @media ${device.mobile} {
    margin: 0;
  }
`;

const SectionB = styled(Section)`
  align-items: center;
`;

const AllInPage = () => {
  return (
    <Layout>
      <Wrapper bg="light">
        <ContentWrapper
          gridGap="90px"
          margin="90px 120px 90px 135px"
          gridColumns="3fr 2fr"
        >
          <Logo position="absolute" top="48px" left="-32px" dark />
          <SectionA>
            <AllInTitle />
            <AllInParagraph />
          </SectionA>
          <SectionB>
            <Ebook />
          </SectionB>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default AllInPage;
