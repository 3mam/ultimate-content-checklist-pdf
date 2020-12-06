import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import useCurrentWidth from '../hooks/useCurrentWidth';

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
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 22px;

  @media only screen and (max-width: 990px) {
    margin-bottom: 30px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .dot {
    order: 1;
    margin-left: 16px;

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
  @media only screen and (max-width: 990px) {
    width: 24px;
    height: 24px;
  }
`;

const Navigation = ({ links, pathname, actualBg, setActualBg }) => {
  let width = useCurrentWidth();

  return (
    <>
      {width > 990 && (
        <DotsStyles>
          <ul>
            {links.map((link) => (
              <LinksWrapper key={link.path} bg={actualBg}>
                <Link className="dot" activeClassName="active" to={link.path}>
                  <NavigationListItem
                    active={pathname === link.path}
                    data-text={link.text}
                    whileTap={{ scale: 0.8 }}
                  />
                </Link>
                <Link className="text" activeClassName="active" to={link.path}>
                  <span>{link.text}</span>
                </Link>
              </LinksWrapper>
            ))}
          </ul>
        </DotsStyles>
      )}
    </>
  );
};

export default Navigation;
