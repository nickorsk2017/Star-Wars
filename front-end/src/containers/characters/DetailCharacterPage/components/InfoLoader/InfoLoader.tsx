"use client";
import { FC, useState, useMemo, useRef } from "react";
import { Loading, Modal, ModalHandler } from "@/components/ui";
import { parserData } from "./parser";
import "./styles.css";

type Props = {
  type: string;
  urls: Array<string>;
};

const InfoLoader: FC<Props> = ({ type, urls }) => {
  const refModal = useRef<ModalHandler>(null);
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
    refModal.current!.show();

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

  return (
    <div className="fa-info-loader">
      <button className="fa-info-loader__btn" onClick={loadData}>
        {type}
      </button>

      <Modal title={type} ref={refModal}>
        {!data.length && <Loading loading />}
        {JSX}
      </Modal>
    </div>
  );
};

export default InfoLoader;
