import { createGlobalStyle } from "styled-components";

import { normalize } from './normalize';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: none;
  }
  
  html, 
  body {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    
    font-family: "Tahoma", sans-serif;
    font-style: normal;
    font-weight: normal;
    
    background-color: ${colors.white};
    
    cursor: default;
  }
`;

export default GlobalStyle;
