import styled from "styled-components";

const ListWrapper = styled.div`
  font-size: 16px;
  width: 100%;
  .todo__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border: 1px solid lightgray;
    padding: 16px 8px;
    p,
    button {
      display: inline-block;
      padding: 0;
    }
  }
`;

export default ListWrapper;
