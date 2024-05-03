import { useEffect, useState } from "react";
import { getMockedData } from "../mocks/getMockedData";

const NODE_ENV = import.meta.env.VITE_NODE_ENV;
const isProduction = NODE_ENV === "production";

/**
 * @description Custom hook used to fetch data
 * @param {*} url api url
 * @returns {Object} Object containing data, loading state and error state
 */
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!isProduction) {
        const mockedData = getMockedData(url);
        setIsLoading(false);
        setData(mockedData);
        return;
      }

      setIsLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const resData = await res.json();

        setData(resData);
        setIsLoading(false);
        return data;
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
