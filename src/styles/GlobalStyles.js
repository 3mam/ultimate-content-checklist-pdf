import { createGlobalStyle, css } from 'styled-components';

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
    scroll-behavior: smooth;
    ${({ desktop }) =>
      desktop &&
      css`
        max-height: 100vh;
        overflow: hidden;
      `}
  }

  img {
    max-width: 100%;
  }

  *, *+* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }  
  
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
`;

export default GlobalStyles;
