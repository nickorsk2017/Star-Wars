import Image from "next/image";
import { FC } from "react";
import "./styles.css";

const Avatar: FC = () => {
  return (
    <div className="fa-avatar">
      <div className="fa-avatar__wrapper">
        <Image
          alt="Avatar"
          loading="lazy"
          src="/icon.png"
          fill
          objectFit="contain"
          className="h-32 w-auto"
        />
      </div>
      No photo
    </div>
  );
};

export default Avatar;
