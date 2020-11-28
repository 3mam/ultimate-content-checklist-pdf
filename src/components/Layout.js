import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import Navigation from './Navigation';
import GlobalStyles from '../styles/GlobalStyles';

const StyledMain = styled(motion.main)`
  max-height: 100vh;
  height: 100vh;
`;
const Layout = ({ children }) => {
  const pathname = useLocation().pathname;
  const [actualBg, setActualBg] = useState('dark');

  const links = [
    {
      path: '/',
      text: 'Checklist',
      bg: 'dark',
    },
    {
      path: '/what-can-you-learn-from-ebook',
      text: 'Learn',
      bg: 'light',
    },
    {
      path: '/all-in-one-content-checklist',
      text: 'Workflow',
      bg: 'light',
    },
  ];

  useEffect(() => {
    const index = links.findIndex((link) => link.path === pathname);
    setActualBg(links[index].bg);
  }, [pathname]);
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <Navigation
        pathname={pathname}
        actualBg={actualBg}
        setActualBg={setActualBg}
        links={links}
      />
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
