"use client";
import { FC, PropsWithChildren, createContext, useRef } from "react";
import useCharacterStore, { DetailCharacterState } from "./store";
import { StoreApi } from "zustand";

export const Context = createContext<StoreApi<DetailCharacterState> | null>(
  null
);

type Props = PropsWithChildren<{ initData: Entity.Character | null }>;

const Provider: FC<Props> = ({ children, initData }) => {
  const store = useRef(useCharacterStore(initData!)).current;

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export default Provider;
