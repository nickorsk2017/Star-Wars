import {FC, PropsWithChildren} from "react";
import "./styles.css";

const Container: FC<PropsWithChildren> = ({children}) => {

  return (
    <div className="fa-container">{children}</div>
  );
}

export default Container; 
