import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import Navigation from './Navigation';
import GlobalStyles from '../styles/GlobalStyles';

const StyledMain = styled(motion.main)`
  max-height: 100vh;
  height: 100vh;
`;
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <StyledMain
        key={location.pathname}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          },
        }}
      >
        {children}
      </StyledMain>
    </>
  );
};

export default Layout;
