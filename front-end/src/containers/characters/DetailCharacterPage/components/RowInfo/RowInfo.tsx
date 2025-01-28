import { FC } from "react";
import "./styles.css";

type Props = {
  label: string;
  value: string;
};

const RowInfo: FC<Props> = ({ label, value }) => {
  return (
    <div className="grid grid-cols-[112px_200px] text-left">
      <div className="">{label}:</div>
      <div>{value}</div>
    </div>
  );
};

export default RowInfo;
