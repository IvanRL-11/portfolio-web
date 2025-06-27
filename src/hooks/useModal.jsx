import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const CloseModal = () => setIsOpen(false);

  return [isOpen, openModal, CloseModal];
};
