import { useListLoader } from "./core";

export const useGetCharacters = (search: string) => {
  return useListLoader<Entity.Character>("https://swapi.dev/api/people", {
    search,
  });
};
