"use client";
import { FC, useContext } from "react";
import Link from "next/link";
import { Context } from "@/store/characters/detail/Provider";
import { Container, Avatar } from "@/components/ui";
import RowInfo from "./components/RowInfo/RowInfo";
import { useStore } from "zustand";
import InfoLoader from "./components/InfoLoader/InfoLoader";
import EditCharacter from "./components/EditCharacter/EditCharacter";
import { Logo } from "@/components/icons";
import "./styles.css";

const DetailCharacterPage: FC = () => {
  const store = useContext(Context);

  const character = useStore(store!, (s) => s.character);
  const updateCharacter = useStore(store!, (s) => s.updateCharacter);

  return (
    <Container>
      <Link href="/">
        <Logo className="h-20 w-44" />
      </Link>
      <div className="detail-character">
        <div className="detail-character__left">
          <EditCharacter data={character!} updateCharacter={updateCharacter} />
          <Avatar />
          <h1 className="detail-character__title">{character!.name}</h1>
          <RowInfo label="Birth" value={character!.birth_year} />
          <RowInfo label="Gender" value={character!.gender} />
          <RowInfo label="Mass" value={character!.mass} />
          <RowInfo label="Height" value={character!.height} />
          <RowInfo label="Skin" value={character!.skin_color} />
        </div>
        <div className="detail-character__info">
          <InfoLoader type="Starships" urls={character!.starships} />
          <InfoLoader type="Species" urls={character!.species} />
          <InfoLoader type="Films" urls={character!.films} />
          <InfoLoader type="Vehicles" urls={character!.vehicles} />
          <InfoLoader type="Planet" urls={[character!.homeworld || ""]} />
        </div>
      </div>
    </Container>
  );
};

export default DetailCharacterPage;
