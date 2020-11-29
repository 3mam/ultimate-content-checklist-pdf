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
    font-family: "Poppins";
  }

  body {
    scroll-behavior: smooth;
    font-family: "Poppins";
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

  button {
  border-radius: 10px;
  background-color: #25eb98;
  font-size: 18px;
  line-height: 1.47;
    font-family: "Poppins";
  border: none;
  transition: box-shadow 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:focus {
      outline: none;
    box-shadow: 0 0 3pt 2pt #fff;
    }
  }
`;

export default GlobalStyles;
