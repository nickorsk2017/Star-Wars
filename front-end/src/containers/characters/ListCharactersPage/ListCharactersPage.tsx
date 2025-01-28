"use client";
import { useState } from "react";
import Link from "next/link";
import ListCharacters from "./components/ListCharacters/ListCharacters";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { Logo } from "@/components/icons";

export default function ListCharactersPage() {
  const [search, setSearch] = useState("");

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <div className="navbar border-2 backdrop-blur-lg bg-[rgb(255,255,255,0.2)] rounded-lg sticky top-2 z-10 ">
        <Link href="/">
          <Logo />
        </Link>
        <SearchPanel value={search} onChange={onSearch} />
      </div>
      <ListCharacters search={search} />
    </>
  );
}
