import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Provider from "@/store/characters/detail/Provider";
import DetailCharacterPage from "@/containers/characters/DetailCharacterPage/DetailCharacterPage";

const env = process.env;

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

  const response = await fetch(`${env.NEXT_PUBLIC_URL_PEOPLE}/${slug}`);
  const data: Responses.CharacterDetailResponse = await response.json();

  if (data!.detail) {
    notFound();
  }

  return (
    <Provider initData={data!}>
      <DetailCharacterPage />
    </Provider>
  );
}
