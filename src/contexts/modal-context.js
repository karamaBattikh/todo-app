import { createContext, useContext, useState } from "react";
import useToggle from "../hooks/use-toggle";
import Modal from "../components/molecules/modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { open, onClose, onOpen } = useToggle();
  const [modalContent, setModalContent] = useState();

  const handleOpen = (content) => {
    onOpen();
    setModalContent(content);
  };

  return (
    <ModalContext.Provider value={{ open, onClose, handleOpen }}>
      {open && <Modal modalContent={modalContent} />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
