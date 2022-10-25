import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";

export interface IModalProps {
  children: ReactNode;
}

export function Modal({ children }: IModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    if (!elRef.current) {
      return;
    }

    modalRoot?.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        modalRoot?.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(
    <div className="absolute z-[1] top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]">
      {children}
    </div>,
    elRef.current
  );
}
