import { useState, useCallback } from "react";

const useModal = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, onClose, onOpen };
};

export default useModal;
