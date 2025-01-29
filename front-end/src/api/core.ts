import { useMemo } from "react";
import useSWRInfinite from "swr/infinite";

const fetcher = async <T>(url: string) => {
  const response = await fetch(url);
  const responseData: T = await response.json();

  return responseData;
};

const getKey = (props: {
  path: string;
  page: number;
  queries: Record<string, string>;
  previousPageData: Responses.CharactersResponse;
}) => {
  const { page, path, queries = {}, previousPageData } = props;
  // reached the end
  if (previousPageData && !previousPageData.next) return null;

  const url = new URL(path);
  // Pages is started from 1 in the API
  url.searchParams.append("page", (page + 1).toString());

  for (const key in queries) {
    const value = queries[key];
    if (value) {
      url.searchParams.append(key, queries[key]);
    }
  }

  return url.toString();
};

export const useListLoader = <T>(
  path: string,
  queries: Record<string, string>,
) => {
  const { data, error, isValidating, size, setSize } = useSWRInfinite<
    Responses.ResponseList<T>
  >(
    (page, previousPageData) =>
      getKey({
        path,
        page,
        queries,
        previousPageData,
      }),
    fetcher,
    {
      initialSize: 1,
      revalidateFirstPage: false,
    },
  );

  const listData = useMemo(() => {
    const result: T[] = [];

    data?.forEach((list) => {
      if (list?.results) {
        list.results.forEach((item) => {
          result.push(item);
        });
      }
    });

    return result;
  }, [data]);

  const loadMore = () => {
    setSize(size + 1);
  };

  return { data: listData, error, isLoading: isValidating, loadMore };
};
