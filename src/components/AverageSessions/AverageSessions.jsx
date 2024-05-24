import AverageSessions from "../../model/AverageSessions";
import Loader from "../common/Loader/Loader";
import Error from "../../pages/Error/Error";
import { useFetch } from "../../hooks/useFetch";
import LineChartContainer from "../LineChart/LineChartContainer";

/**
 * @description Fetch user average sessions data and display the LineChartContainer component
 * @returns {React.FC}
 */
const AverageSessionsComponent = () => {
  const userId = import.meta.env.VITE_USER_ID;
  const API_URL = import.meta.env.VITE_API_URL;
  const lineChartTitle = "Durée moyenne des sessions";

  const { data, isLoading, error } = useFetch(
    `${API_URL}/user/${userId}/average-sessions`
  );
  const averageSessions = data ? new AverageSessions(data) : null;
  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error /> : null}
      {averageSessions && (
        <LineChartContainer
          title={lineChartTitle}
          data={averageSessions.sessions}
        />
      )}
    </>
  );
};

export default AverageSessionsComponent;
