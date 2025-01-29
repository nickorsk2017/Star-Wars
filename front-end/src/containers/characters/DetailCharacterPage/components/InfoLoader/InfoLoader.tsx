"use client";
import { FC, useState, useMemo } from "react";
import { Loading, Modal } from "@/components/ui";
import { parserData } from "./parser";
import "./styles.css";

type Props = {
  type: string;
  urls: Array<string>;
};

const InfoLoader: FC<Props> = ({ type, urls }) => {
  const [modalShown, showModal] = useState(false);
  const [data, setData] = useState<Types.RecordsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const JSX = useMemo(() => {
    return parserData(data);
  }, [data]);

  if (!urls?.length) {
    return null;
  }

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const result: Types.RecordsData = await response.json();

    return result;
  };

  const loadData = async () => {
    showModal(true);

    if (!data.length && !loading) {
      setLoading(true);

      Promise.all(urls.map(async (url) => await fetchData(url)))
        .then((allData) => {
          setData(allData);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const closeModal = () => {
    showModal(false);
  };

  return (
    <div className="fa-info-loader">
      <button
        data-testid="info-loader-btn"
        className="fa-info-loader__btn"
        onClick={loadData}
      >
        {type}
      </button>

      <Modal title={type} open={modalShown} onClose={closeModal}>
        {!data.length && <Loading loading />}
        {JSX}
      </Modal>
    </div>
  );
};

export default InfoLoader;
