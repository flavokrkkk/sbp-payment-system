import { useEffect } from "react";

export const useKeyDown = (isOpen: boolean, onClose: () => void) => {
  useEffect(() => {
    const handleCloseKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleCloseKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleCloseKeyDown);
    };
  }, [isOpen, onClose]);
};
