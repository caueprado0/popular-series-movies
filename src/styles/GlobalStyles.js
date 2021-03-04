import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #ecf0f9;
    background-attachment: fixed;
  }
`;
