import { useFetch } from "../../hooks/useFetch";
import Activity from "../../model/Activity";
import Loader from "../common/Loader/Loader";
import Error from "../../pages/Error/Error";
import BarChartContainer from "../BarChart/BarChartContainer";
import { useParams } from "react-router-dom";

/**
 * @description Fetch user activity data and display the BarChartContainer component
 * @returns {React.FC}
 */
const ActivityComponent = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const barChartTitle = "Activité quotidienne";

  const { data, isLoading, error } = useFetch(`${API_URL}/user/${id}/activity`);
  const activity = data ? new Activity(data) : null;
  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error error={error} /> : null}
      {activity && (
        <BarChartContainer title={barChartTitle} data={activity.sessions} />
      )}
    </>
  );
};

export default ActivityComponent;
