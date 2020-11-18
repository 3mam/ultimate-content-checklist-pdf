import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      datoCmsLandingPageContent {
        pdfTitle
      }
    }
  `);
  return (
    <>
      <SEO title="Ultimate content checklist" />
      <h1>Heyyya</h1>
      <p>Content from datoCMS</p>
      <h2>{data.datoCmsLandingPageContent.pdfTitle}</h2>
    </>
  );
};

export default HomePage;
