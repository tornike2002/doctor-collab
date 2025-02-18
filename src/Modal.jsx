import { Children, useEffect, useRef } from "react";

import { createPortal } from "react-dom";
export default function Modal() {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{Children}</div>, elRef.current);
}
