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
          containerRef.current!.show();
        },
      };
    },
    []
  );

  return (
    <dialog ref={containerRef} className="modal">
      <div className="modal-box text-black min-w-[800px] pb-14">
        <h3 className="font-bold text-lg mb-6">{title}</h3>
        <div className="max-h-[400px] overflow-auto text-left">{children}</div>
      </div>
      <form
        method="dialog"
        className="modal-backdrop rounded-xl bg-[rgba(0,0,0,0.9)]"
      >
        <button></button>
        <button className="absolute right-10 top-10 text-white">X</button>
      </form>
    </dialog>
  );
};

export default Modal;
