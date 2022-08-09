import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
  }

  body {
    -webkit-font-smoothing: antialised;

    ${({ theme }) => css`
      background-color: ${theme.colors.gray[800]};
      color: ${theme.colors.gray[100]};
    `}
  }

  body, input, textarea, button, select {
    font: 400 1rem "Roboto", sans-serif;
  }

  a, button {
    cursor: pointer;
  }

  button {
    border: 0;
    background: transparent;
  }

  input {
    border: 0;
  }
`;
