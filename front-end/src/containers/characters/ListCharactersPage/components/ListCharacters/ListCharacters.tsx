"use client";
import { FC, useMemo } from "react";
import { useGetCharacters } from "@/api";
import { Loading } from "@/components/ui";
import { CardCharacter } from "@/components/characters";
import "./styles.css";

type Props = {
  search: string;
};

const ListCharacters: FC<Props> = ({ search }) => {
  const {
    data: characters,
    error,
    isLoading,
    loadMore,
  } = useGetCharacters(search);

  const JSX = useMemo(() => {
    return characters.map((data) => {
      //https://swapi.dev/api/people doesn't have ID in records
      //we shouldn't use index as key
      return <CardCharacter key={data.name} data={data} />;
    });
  }, [characters]);

  const JSXEmpty = useMemo(() => {
    const emptyCount = 4 - (characters.length % 4);

    if (emptyCount === 4) {
      return null;
    }

    const emptyCards: Array<null> = Array<null>(emptyCount).fill(null);

    return emptyCards.map((empty, index) => {
      //Here all data is null - index is ok
      return <CardCharacter key={index} data={empty} />;
    });
  }, [characters]);

  return (
    <div className="fa-list-characters">
      <div className="fa-list-characters__wrapper">
        {JSX}
        {!!JSX.length && JSXEmpty}
      </div>
      {error && <div>{error}</div>}
      <Loading loading={isLoading} />
      {!isLoading && (
        <button className="fa-list-characters__btn" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default ListCharacters;
