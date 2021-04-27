import { useRef } from "react";
import { useModal } from "../../../contexts/modal-context";
import useOnClickOutside from "../../../hooks/use-onClick-outside";
import useLockBodyScroll from "../../../hooks/use-lock-body-scroll";
import Portal from "../../../utils/portal";
import Button from "../../atoms/button";
import ModalWrapper from "./modal-wrapper";

const Modal = ({ modalContent: { text, handleClick } }) => {
  const ref = useRef();
  const { onClose } = useModal();
  useLockBodyScroll();
  useOnClickOutside(ref, () => onClose());

  return (
    <Portal selector="modal-root">
      <ModalWrapper>
        <div className="modal" ref={ref}>
          <Button
            className="modal__close"
            type="button"
            icon="icon-close"
            onClick={onClose}
          />

          <div className="modal__content">{text}</div>

          <div className="modal__button">
            <Button type="button" onClick={handleClick}>
              Oui
            </Button>
            <Button type="button" onClick={onClose}>
              Non
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
