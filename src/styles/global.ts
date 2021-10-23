import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: ${(props) => props.theme.font.family};
    background-color: ${(props) => props.theme.colors.background_dark};
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
  }

  a {
    text-decoration: none;
  }

`

export default GlobalStyles