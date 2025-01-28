"use client";
import { useState } from "react";
import ListCharacters from "../ListCharacters/ListCharacters";
import SearchPanel from "../SearchPanel/SearchPanel";
import { Logo } from "@/components/icons";

export default function CharactersPage() {
  const [search, setSearch] = useState("");

  const onSearch = (value: string) => {
    setSearch(value);
  };

  console.log(search, "search");

  return (
    <>
      <div className="navbar border-2 backdrop-blur-lg bg-[rgb(255,255,255,0.2)] rounded-lg sticky top-2 z-10 ">
        <Logo />
        <SearchPanel value={search} onChange={onSearch} />
      </div>
      <ListCharacters search={search} />
    </>
  );
}
