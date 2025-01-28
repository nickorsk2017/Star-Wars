"use client";
import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import ListCharacters from "./components/ListCharacters/ListCharacters";
import Search from "./components/Search/Search";
import { Logo } from "@/components/icons";

export default function ListCharactersPage() {
  const [search, setSearch] = useState("");

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Container>
      <div className="navbar border-2 backdrop-blur-lg bg-[rgb(255,255,255,0.2)] rounded-lg sticky top-2 z-10 ">
        <Link href="/">
          <Logo />
        </Link>
        <Search value={search} onChange={onSearch} />
      </div>
      <ListCharacters search={search} />
    </Container>
  );
}
