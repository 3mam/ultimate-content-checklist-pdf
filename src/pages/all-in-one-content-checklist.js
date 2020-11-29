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
import useCurrentWidth from '../hooks/useCurrentWidth';
import { Link } from 'gatsby';

const Section = styled.section`
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const SectionTitle = styled(Section)`
  flex-direction: column;
  @media ${device.mobile} {
    margin: 0;
  }
`;

export const SectionEbook = styled(Section)`
  align-items: center;
`;

export const Flex = styled.div`
  height: 100vh;
  max-width: 100vw;
  padding: 0 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #171717;

  a {
    font-size: 22px;
    line-height: 1.3em;
    color: #00ef8b;
    text-decoration: underline;
    font-family: 'Poppins';
  }
`;

const AllInPage = () => {
  let width = useCurrentWidth();
  return (
    <>
      {width > 990 ? (
        <Layout>
          <Wrapper bg="light">
            <ContentWrapper
              gridGap="50px"
              padding="90px 120px 90px 135px"
              gridColumns="3fr 2fr"
            >
              <Logo position="absolute" top="138px" left="95px" dark />
              <SectionTitle>
                <AllInTitle />
                <AllInParagraph />
              </SectionTitle>
              <SectionEbook>
                <Ebook />
              </SectionEbook>
            </ContentWrapper>
          </Wrapper>
        </Layout>
      ) : (
        <Flex>
          Better don't mess around here
          <Link to="/">&larr; The Ultimate Content Checklist</Link>
        </Flex>
      )}
    </>
  );
};

export default AllInPage;
