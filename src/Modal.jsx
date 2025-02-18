import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) return;

    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      {children}
    </div>,
    elRef.current
  );
}

export default Modal;
