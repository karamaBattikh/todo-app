import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px;

  background-color: lightgray;
  font-size: 16px;
  width: 100%;
  ul {
    margin-left: 20px;

    li {
      display: inline-block;
      margin: auto 10px;
    }
    li,
    a {
      color: darkgrey;
    }
  }
`;

export default HeaderWrapper;
