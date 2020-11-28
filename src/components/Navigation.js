import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { useLocation } from '@reach/router';
import Logo from './Logo';

const DotsStyles = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 3vw;
  display: flex;
  flex-direction: column;
  z-index: 2;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0;
  }

  .dot {
    order: 1;
    margin-left: 4px;

    &:hover ~ .text {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }

  .text {
    font-family: 'Poppins';
    font-size: 16px;
    line-height: 1em;
    font-weight: 400;
    text-decoration: none;
    text-align: right;
    color: ${({ bg }) => (bg === 'light' ? 'black' : 'white')};
    transform: translateX(-16px);
    visibility: hidden;
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const NavigationListItem = styled(motion.li)`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#25eb98' : '#eff0f1')};
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  transform: translateX(16px);
`;

const LogoWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
`;

const Navigation = ({ links, pathname, actualBg, setActualBg }) => {
  return (
    <>
      <DotsStyles>
        <ul>
          {links.map((link) => (
            <LinksWrapper bg={actualBg}>
              <Link className="dot" activeClassName="active" to={link.path}>
                <NavigationListItem
                  active={pathname === link.path}
                  data-text={link.text}
                />
              </Link>
              <Link className="text" activeClassName="active" to={link.path}>
                <span>{link.text}</span>
              </Link>
            </LinksWrapper>
          ))}
        </ul>
      </DotsStyles>
    </>
  );
};

export default Navigation;
