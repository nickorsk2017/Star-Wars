import { FC } from "react";
import "./styles.css";

type Props = {
  label: string;
  value: string;
};

const RowInfo: FC<Props> = ({ label, value }) => {
  return (
    <div className="fa-row-info">
      <div className="">{label}:</div>
      <div>{value}</div>
    </div>
  );
};

export default RowInfo;
