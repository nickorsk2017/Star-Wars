import { useListLoader } from "./core";

const env = process.env;

export const useGetCharacters = (search: string) => {
  return useListLoader<Entity.Character>(env.NEXT_PUBLIC_URL_PEOPLE!, {
    search,
  });
};
