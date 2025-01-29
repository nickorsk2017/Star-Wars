import { FC } from "react";
import "./styles.css";

type Props = {
  loading: boolean;
};

const Loading: FC<Props> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="fa-loading" role="icon" data-testid="loading-component">
      <span className="fa-loading__icon loading loading-ring"></span>
    </div>
  );
};

export default Loading;
