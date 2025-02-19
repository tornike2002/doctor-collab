import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 px-[20px] flex justify-center items-center">
      {children}
    </div>,
    elRef.current
  );
}

export default Modal;
