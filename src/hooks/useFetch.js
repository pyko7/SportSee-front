import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/data";

const ENV_URL = "productio";
const USER_DATA_URL = "http://localhost:3000/user/12";
const USER_ACTIVITY_DATA_URL = "http://localhost:3000/user/12/activity";
const AVERAGE_SESSIONS_DATA_URL =
  "http://localhost:3000/user/12/average-sessions";
const PERFORMANCE_DATA_URL = "http://localhost:3000/user/12/performance";

const isProduction = ENV_URL === "production";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let mockedData;

  switch (url) {
    case USER_DATA_URL:
      mockedData = USER_MAIN_DATA;
      break;
    case USER_ACTIVITY_DATA_URL:
      mockedData = USER_ACTIVITY;
      break;
    case AVERAGE_SESSIONS_DATA_URL:
      mockedData = USER_AVERAGE_SESSIONS;
      break;
    case PERFORMANCE_DATA_URL:
      mockedData = USER_PERFORMANCE;
      break;

    default:
      console.log("Wrong url");
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!isProduction) {
          setIsLoading(false);
          setData(mockedData);
          return;
        }
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
