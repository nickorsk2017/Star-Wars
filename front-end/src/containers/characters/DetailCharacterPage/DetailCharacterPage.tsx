import { FC } from "react";
import Link from "next/link";
import { Container, Avatar } from "@/components/ui";
import RowInfo from "./components/RowInfo/RowInfo";
import InfoLoader from "./components/InfoLoader/InfoLoader";
import { Logo } from "@/components/icons";

type Props = {
  data: Entity.Character;
};

const DetailCharacterPage: FC<Props> = ({ data }) => {
  return (
    <Container>
      <Link href="/">
        <Logo className="h-20 w-44" />
      </Link>
      <div className="flex h-[600px] rounded-lg border-2 border-yellow-500 backdrop-blur-sm text-white bg-[rgb(255,255,255,0.2)]">
        <div className="w-[450px] h-full border-r-2 pt-24 pr-10 pl-10">
          <Avatar />
          <h1 className="mb-10 mt-3 text-4xl text-primary">{data.name}</h1>
          <RowInfo label="Birth" value={data.birth_year} />
          <RowInfo label="Gender" value={data.gender} />
          <RowInfo label="Mass" value={data.mass} />
          <RowInfo label="Height" value={data.height} />
          <RowInfo label="Skin" value={data.skin_color} />
        </div>
        <div className="pt-24 pr-10 pl-10 grid grid-cols-[200px_200px] grid-rows-6">
          <InfoLoader type="Starships" urls={data.starships} />
          <InfoLoader type="Species" urls={data.species} />
          <InfoLoader type="Films" urls={data.films} />
          <InfoLoader type="Vehicles" urls={data.vehicles} />
          <InfoLoader type="Planet" urls={[data?.homeworld || ""]} />
        </div>
      </div>
    </Container>
  );
};

export default DetailCharacterPage;
