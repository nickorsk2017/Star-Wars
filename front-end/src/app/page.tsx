import CharactersPage from "./containers/Page/Page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List of characters",
  description: "This page contains list of characters",
};

export default function MainPage() {
  return <CharactersPage />;
}
