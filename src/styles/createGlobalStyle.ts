import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-width: 100%;
    min-height: 100%;
    font-size: 10px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  *, button, input {
    border: 0;
    background: none;
  }
  :root {
      --header: #2B69DB;
      --background_blue: #2B69DB;
      --background_white: #fff;
      --text_blue: #2B69DB;
      --text_white: #2B69DB;
      --text_detail: #EA7165;
      --button_color:#E15C54;
      --title: #2B69DB;
      --schedule:#71A7ED;
  }
`;
