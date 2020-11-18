import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --blackText: #171717;
    --grey: #585858;
    --lightGrey: #B2B2B2;
    --lightestGrey: #EFF0F1;
    --white: #FFFFFF;
    --accent: #25EB98;
    --accentStronger: #00EF8B;
  }
  
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    scroll-behavior: smooth;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--accent) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--accent) ;
    border-radius: 0px;
  }

  img {
    max-width: 100%;
  }

  *, *+* {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
