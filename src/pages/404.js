import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Styles = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  color: #fff;

  h1 {
    font-family: 'Poppins';
    font-size: 47px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: var(--accent);
  }
`;

const NotFoundPage = () => {
  return (
    <Layout bg="dark">
      <SEO title="Not found page" />
      <Styles>
        <h1>
          Not found 🤷‍♂️ <Link to="/">&rarr;</Link>
        </h1>
      </Styles>
    </Layout>
  );
};

export default NotFoundPage;
