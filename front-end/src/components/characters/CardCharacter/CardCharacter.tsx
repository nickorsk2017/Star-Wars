import { FC } from "react";
import "./styles.css";

type Props = {
  data: Entity.Character | null;
};

const CharacterCard: FC<Props> = ({ data }) => {
  const notEmptyClass = !!data ? "not-empty" : "";

  return (
    <div className={`fa-character-card ${notEmptyClass}`}>
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
  );
};

export default CharacterCard;
