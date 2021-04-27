import { createGlobalStyle } from "styled-components";

const reset = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  var,
  i,
  center,
  ul,
  li,
  form,
  label,
  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  footer,
  header,
  menu,
  nav {
    margin: 0;
    padding: 0;
    border: 0;
  }

a {
  text-decoration: none
}

/* import font */


@font-face {
  font-family: "todo_icon";
  src: url("/fonts/todo_icon.eot");
  src: url("/fonts/todo_icon.eot") format("embedded-opentype"),
    url("/fonts/todo_icon.ttf") format("truetype"),
    url("/fonts/todo_icon.woff") format("woff"),
    url("/fonts/todo_icon.svg") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

i {
  font-family: "todo_icon" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/************ icon ************/
.icon-close:before {
  content: "\\e900";
}

`;

export default reset;
