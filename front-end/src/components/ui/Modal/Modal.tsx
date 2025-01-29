"use client";
import {
  FC,
  PropsWithChildren,
  Ref,
  useRef,
  useImperativeHandle,
  RefObject,
} from "react";
import "./styles.css";

export type ModalHandler = {
  show: VoidFunction;
  close: VoidFunction;
};

type Props = {
  title: string;
  ref: RefObject<unknown>;
};

const Modal: FC<PropsWithChildren<Props>> = ({ title, children, ref }) => {
  const containerRef: Ref<HTMLDialogElement> = useRef(null);

  useImperativeHandle(
    ref,
    (): ModalHandler => {
      return {
        show: () => {
          containerRef.current!.show();
        },
        close: () => {
          containerRef.current!.close();
        },
      };
    },
    []
  );

  return (
    <dialog ref={containerRef} className="fa-modal">
      <div className="fa-modal__body">
        <h3 className="fa-modal__title">{title}</h3>
        <div className="fa-modal__wrapper">{children}</div>
      </div>
      <form method="dialog" className="fa-modal__backdrop">
        <button></button>
        <button className="fa-modal__btn">X</button>
      </form>
    </dialog>
  );
};

export default Modal;
