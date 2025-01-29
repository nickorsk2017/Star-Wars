"use client";
import { FC, PropsWithChildren, Ref, useRef, useEffect } from "react";
import "./styles.css";

export type ModalHandler = {
  show: VoidFunction;
  close: VoidFunction;
};

type Props = {
  title: string;
  open: boolean;
  onClose?: () => void;
};

const Modal: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  open,
  onClose,
}) => {
  const containerRef: Ref<HTMLDialogElement> = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      if (open) {
        containerRef.current.setAttribute("open", "");
      } else {
        containerRef.current.removeAttribute("open");
      }
    }
  }, [open]);

  return (
    <dialog role="dialog" ref={containerRef} className="fa-modal">
      <div className="fa-modal__body">
        <h3 className="fa-modal__title">{title}</h3>
        <div className="fa-modal__wrapper">{children}</div>
      </div>
      <form
        method="dialog"
        data-testid="modal-button"
        className="fa-modal__backdrop"
        onClick={onClose}
      >
        <button role="button" className="fa-modal__btn" type="button">
          X
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
