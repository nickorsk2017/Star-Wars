import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DetailCharacterPage from "@/containers/characters/DetailCharacterPage/DetailCharacterPage";

export const metadata: Metadata = {
  title: "Character detail page",
  description: "This page contains information of character",
};

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const response = await fetch(`https://swapi.dev/api/people/${slug}`);
  const data: Responses.CharacterDetailResponse = await response.json();

  if (data.detail) {
    notFound();
  }

  return <DetailCharacterPage data={data} />;
}
