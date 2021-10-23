import { createGlobalStyle, css } from 'styled-components'

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

  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.background_dark};
      color: ${theme.colors.white};
    }
    body,
    input,
    textarea,
    select,
    button {
      font-family: ${theme.font.family};
      font-size: 16px;
    }
  `}

  button {
    cursor: pointer;
    border: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    max-width: 100%;
  }

`

export default GlobalStyles