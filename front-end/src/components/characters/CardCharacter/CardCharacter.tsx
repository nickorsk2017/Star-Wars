import { FC } from "react";
import Link from "next/link";
import "./styles.css";

type Props = {
  data: Entity.Character | null;
};

const CharacterCard: FC<Props> = ({ data }) => {
  if (!data) {
    return (
      <div className="fa-character-card">
        <div className="card-body"></div>
      </div>
    );
  }
  const url = data?.url || "";
  const matchId = url.match(/\/(\d+)/);
  const id = matchId ? matchId[1] : 1;

  return (
    <Link href={`/character/${id}`}>
      <div className="fa-character-card not-empty">
        <div className="card-body">
          {data && (
            <>
              <h2 className="card-title text-primary">{data.name}</h2>
              <p>Birth: {data.birth_year}</p>
              <p>Height: {data.height}</p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
