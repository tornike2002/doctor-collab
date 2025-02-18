import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) {
      elRef.current = document.createElement("div");
    }

    const modalRoot = document.getElementById("modal");
    if (!modalRoot) return;

    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return elRef.current
    ? createPortal(<div className=" bg-black ">{children}</div>, elRef.current)
    : null;
}

export default Modal;
