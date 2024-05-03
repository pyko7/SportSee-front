import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

const API_URL = import.meta.env.VITE_API_URL;

const USER_DATA_URL = `${API_URL}/user/12`;
const USER_ACTIVITY_DATA_URL = `${API_URL}/user/12/activity`;
const AVERAGE_SESSIONS_DATA_URL = `${API_URL}/user/12/average-sessions`;
const PERFORMANCE_DATA_URL = `${API_URL}/user/12/performance`;

/**
 * @description this function returns mocked data according to the url
 * @param {String} url api url
 * @returns mocked data
 */
export const getMockedData = (url) => {
  let mockedData = "";
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
  console.log("Currently using mocked data");
  return mockedData;
};
