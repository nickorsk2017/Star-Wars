"use client";
import { createStore } from "zustand";

export type DetailCharacterState = {
  character: Entity.Character | null;
  updateCharacter: (data: Partial<DetailCharacterState["character"]>) => void;
};

const useStore = (initProps: DetailCharacterState["character"]) => {
  return createStore<DetailCharacterState>()((set) => ({
    character: initProps,
    updateCharacter: (data: Partial<DetailCharacterState["character"]>) => {
      return set((state) => {
        const newState = { ...state.character!, ...data };

        return { character: newState };
      });
    },
  }));
};

export default useStore;
