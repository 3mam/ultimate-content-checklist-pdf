import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import useCurrentWidth from '../../hooks/useCurrentWidth';
import { AnimatePresence, motion } from 'framer-motion';
import { Input, Button as ButtonForm } from '../section1/Email';

const Div = styled.div`
  background-color: #171717;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Button = styled(motion.button)`
  border-radius: 10px;
  background-color: #25eb98;
  border: none;
  padding: 12px 53px 12px 54px;
  font-size: 15px;
  line-height: 1.47em;
  margin: 0 0 30px;
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover:not(:focus) {
    box-shadow: 0 0 0pt 1pt #00ef8b;
  }
`;

const EbookTitle = styled.p`
  margin: 51px 34px 29px 34px;
  font-family: Poppins;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  max-width: 253px;
`;

const Cover = styled(Img)`
  margin: 0 51px 0 51px;
  @media only screen and (max-width: 1366px) {
    width: 212px !important;
  }
  img,
  picture {
    width: 100%;
    object-fit: cover;
  }
`;

const Ebook = () => {
  let width = useCurrentWidth();
  const [showModal, setShowModal] = useState(false);

  const data = useStaticQuery(graphql`
    {
      cms: datoCmsLandingPageContent {
        bigger: ebookGraphic {
          fixed(
            width: 297
            forceBlurhash: false
            imgixParams: { fm: "png", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
        smaller: ebookGraphic {
          fixed(
            width: 212
            forceBlurhash: false
            imgixParams: { fm: "png", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
        ebookTitle
        ebookBtnText
      }
    }
  `);

  return (
    <Div id="ebook">
      <Section>
        <EbookTitle>{data.cms.ebookTitle}</EbookTitle>
        <Cover
          fixed={width > 1366 ? data.cms.bigger.fixed : data.cms.smaller.fixed}
        />
        <Button
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setShowModal(true)}
        >
          {data.cms.ebookBtnText}
        </Button>
        <AnimatePresence>
          {showModal && <Modal closeModal={() => setShowModal(false)} />}
        </AnimatePresence>
      </Section>
    </Div>
  );
};

const ModalStyles = styled(motion.form)`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  background-color: #171717;
  box-shadow: 0 0 32px -5px #17171788;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-family: 'Poppins';

  @media only screen and (max-width: 990px) {
    max-width: 80%;
    height: 90vh;
    bottom: 50%;
  }

  input {
    &:focus + label {
      color: #00ef8b;
      transform: translate(16px, -84px);
      opacity: 1;
      @media only screen and (max-width: 990px) {
        transform: translate(18px, -104px);
        opacity: 1;
      }
    }
  }

  label {
    color: #fff;
    font-size: 12px;
    transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
      color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translate(16px, -22px);
    opacity: 0;
    @media only screen and (max-width: 990px) {
      transform: translateY(18px -32px);
    }
  }

  button[type='submit'] {
    height: 60px;
    cursor: pointer;

    &:focus {
      box-shadow: '0 0 1pt 2p2 #00ef8b';
    }
  }

  button[type='button'] {
    padding: 0;
    font-size: 42px;
    line-height: 1em;
    color: #fff;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 40px;
    top: 20px;
    outline: none;
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

const Modal = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };
  return (
    <ModalStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        id="emailInput"
        name="emailInput"
        placeholder="Your email"
        required
      />
      <label htmlFor="emailInput">email</label>
      <motion.button
        whileHover={{ boxShadow: '0 0 0 1pt #00ef8b' }}
        whileTap={{ scale: 0.95 }}
        type="submit"
      >
        Send
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2, color: '#00ef8b' }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={closeModal}
      >
        &times;
      </motion.button>
    </ModalStyles>
  );
};

export default Ebook;
