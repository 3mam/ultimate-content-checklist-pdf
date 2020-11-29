import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import device from '../../utils/device';

const Div = styled.div`
  display: flex;
  @media only screen and (max-width: 990px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  width: 135px;
  height: 100%;
  border-radius: 10px;
  background-color: #25eb98;
  @media only screen and (max-width: 990px) {
    width: auto;
    height: 60px;
  }
`;

const Span = styled.span`
  position: absolute;
  opacity: 0.6;
  left: 20px;
  bottom: 23px;
  @media only screen and (max-width: 990px) {
    bottom: 41px;
  }
  cursor: text;
  transition: all 0.5s ease-in-out;
`;

const Input = styled.input`
  width: 310px;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0 14px 0 0;
  padding: 0 0 0 20px;
  font-size: 1.5em;
  @media only screen and (max-width: 990px) {
    margin: 0 0 19px 0;
    width: auto;
  }

  &:not(:placeholder-shown) + ${Span.toString()}, &:focus + ${Span.toString()} {
    opacity: 1;
    transform: translate(-10px, -45px);
    font-size: 0.8em;
    color: white;
    cursor: default;
  }
`;

const Email = () => {
  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        emailPlaceholder
        emailButtonText
        emailSuccessMessage
        emailErrorMessage
      }
    }
  `);

  return (
    <Div id="email">
      <Label>
        <Input type="text" placeholder=" " />
        <Span>{data.cms.emailPlaceholder}</Span>
      </Label>
      <Button>{data.cms.emailButtonText}</Button>
    </Div>
  );
};

export default Email;
