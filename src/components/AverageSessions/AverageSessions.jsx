import AverageSessions from "../../model/AverageSessions";
import Loader from "../common/Loader/Loader";
import Error from "../../pages/Error/Error";
import { useFetch } from "../../hooks/useFetch";
import LineChartContainer from "../LineChart/LineChartContainer";
import { useParams } from "react-router-dom";

/**
 * @description Fetch user average sessions data and display the LineChartContainer component
 * @returns {React.FC}
 */
const AverageSessionsComponent = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const lineChartTitle = "Durée moyenne des sessions";

  const { data, isLoading, error } = useFetch(
    `${API_URL}/user/${id}/average-sessions`
  );
  const averageSessions = data ? new AverageSessions(data) : null;
  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error error={error} /> : null}
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
