import { motion } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useLocation, navigate } from '@reach/router';
import Navigation from './Navigation';
import GlobalStyles from '../styles/GlobalStyles';
import useCurrentWidth from '../hooks/useCurrentWidth';
import _ from 'lodash';

const StyledMain = styled(motion.main)`
  ${({ desktop }) =>
    desktop &&
    css`
      max-height: 100vh;
      height: 100vh;
    `}
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
      path: '/what-can-you-learn-from-ebook/',
      text: 'Learn',
      bg: 'light',
    },
    {
      path: '/all-in-one-content-checklist/',
      text: 'Workflow',
      bg: 'light',
    },
  ];

  useEffect(() => {
    const index = links.findIndex((link) => link.path === pathname);
    index !== -1 ? setActualBg(links[index].bg) : setActualBg('dark');
  }, [pathname]);
  const location = useLocation();
  let currentWidth = useCurrentWidth();

  const handleUserKeyPress = useCallback((event) => {
    console.log('Press: ', event);
    if (currentWidth > 990) {
      const { key, keyCode } = event;
      if (keyCode === 40 || keyCode == 39) {
        if (pathname === links[0].path) {
          navigate(links[1].path);
        } else if (pathname === links[1].path) {
          navigate(links[2].path);
        }
      }
      if (keyCode === 38 || keyCode == 37) {
        // arrow up
        if (pathname === links[1].path) {
          navigate(links[0].path);
        } else if (pathname === links[2].path) {
          navigate(links[1].path);
        }
      }
    }
  }, []);

  const handleUserScroll = useCallback(
    _.throttle((event) => {
      const { deltaY } = event;
      console.log('Deltay: ', deltaY);
      if (deltaY < 0) {
        if (pathname === links[1].path) {
          navigate(links[0].path);
        } else if (pathname === links[2].path) {
          navigate(links[1].path);
        }
      } else if (deltaY > 0) {
        if (pathname === links[0].path) {
          navigate(links[1].path);
        } else if (pathname === links[1].path) {
          navigate(links[2].path);
        }
      }
    }, 1200),
    [],
  );

  useEffect(() => {
    if (currentWidth > 990) {
      window.addEventListener('keydown', handleUserKeyPress);
      window.addEventListener('wheel', handleUserScroll);

      return () => {
        window.removeEventListener('keydown', handleUserKeyPress);
        window.removeEventListener('wheel', handleUserScroll);
      };
    }
  }, [handleUserKeyPress, handleUserScroll]);

  return (
    <>
      <GlobalStyles desktop={currentWidth > 990} />
      <Navigation
        pathname={pathname}
        actualBg={actualBg}
        setActualBg={setActualBg}
        links={links}
      />
      <StyledMain
        desktop={currentWidth > 990}
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
