import styled from "styled-components";

const AddFormWrapper = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: auto -20px;
  > * {
    flex: 1 1 auto;
    max-width: auto;
    padding: 0 20px;
  }
  .form__action {
    align-self: center;
  }
`;

export default AddFormWrapper;
