declare namespace Entity {
  type Character = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: Types.Gender;
    homeworld: Types.URL;
    films: Types.URL[];
    species: Types.URL[];
    vehicles: Types.URL[];
    starships: Types.URL[];
    created: Types.UTCString;
    edited: Types.UTCString;
    url: Types.URL;
  };
}
