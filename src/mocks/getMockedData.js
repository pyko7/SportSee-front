import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

const USER_ACTIVITY_DATA_URL = "activity";
const AVERAGE_SESSIONS_DATA_URL = "average-sessions";
const PERFORMANCE_DATA_URL = "performance";

/**
 * @description this function returns mocked data according to the url
 * @param {String} url api url
 * @returns mocked data
 */
export const getMockedData = (url) => {
  let mockedData = "";
  let lastPartOfUrl = url.substring(url.lastIndexOf("/") + 1);
  switch (lastPartOfUrl) {
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
      mockedData = USER_MAIN_DATA;
      break;
  }
  console.log("Currently using mocked data");
  return mockedData;
};
