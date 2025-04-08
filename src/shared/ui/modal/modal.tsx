import { FC, useRef } from "react";
import ReactDOM from "react-dom";
import { useModalAnimate } from "@/shared/hooks/useAnimate";

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const Modal: FC<IModal> = ({ children, isOpen, onClose }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useModalAnimate({ isOpen, backdropRef, contentRef });

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={backdropRef}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000066] backdrop-blur-sm opacity-0"
    >
      <div
        ref={contentRef}
        className="bg-transparent rounded-2xl max-w-[90vw] max-h-[90vh] overflow-auto opacity-0"
        onClick={onClose}
      >
        <div className="relative p-2">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
