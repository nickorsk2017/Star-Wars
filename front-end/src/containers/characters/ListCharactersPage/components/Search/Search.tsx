"use client";
import { FC } from "react";
import debouce from "lodash.debounce";
import "./styles.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Search: FC<Props> = ({ onChange }) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const debounceHandler = () => {
    return debouce(searchHandler, 1000);
  };

  return (
    <div className="input input-bordered flex items-center w-96 ml-10">
      <input
        autoFocus
        type="text"
        className="grow text-black"
        placeholder="Search"
        onChange={debounceHandler()}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Search;
