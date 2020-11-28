import React from 'react';
import styled from 'styled-components';
import device from '../utils/device';

const DotsStyles = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 5vw;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    display: none;
  }
`;

const Dot = styled.button`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-bottom: 22px;
  border: none;
`;

const Dots = ({ navigationList }) => {
  return <DotsStyles id="dots">{console.log(navigationList)}</DotsStyles>;
};

export default Dots;
