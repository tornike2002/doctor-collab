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
    document.body.style.overflow = "hidden";

    return () => {
      modalRoot.removeChild(elRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5">
      {children}
    </div>,
    elRef.current
  );
}

export default Modal;
