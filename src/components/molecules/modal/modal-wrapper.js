import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 1;
  animation: show 0.5s ease;

  .modal {
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    text-align: center;
    padding: 20px;

    &__close {
      position: absolute;
      right: -10px;
      top: -10px;
    }
    &__content {
      padding: 30px;
    }
    &__button {
      margin: auto;
      > * {
        margin: auto 20px;
      }
    }
  }
`;
export default ModalWrapper;
