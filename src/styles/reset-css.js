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
`;

export default reset;
