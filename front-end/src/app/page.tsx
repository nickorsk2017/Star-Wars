import ListCharacters from "@/containers/characters/ListCharactersPage/ListCharactersPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List of characters",
  description: "This page contains list of characters",
};

export default function MainPage() {
  return <ListCharacters />;
}
