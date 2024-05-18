import { useFetch } from "../../hooks/useFetch";
import Activity from "../../model/Activity";
import Loader from "../common/Loader/Loader";
import Error from "../../pages/Error/Error";
import BarChartContainer from "../BarChart/BarChartContainer";

const ActivityComponent = () => {
  const userId = 12;
  const API_URL = import.meta.env.VITE_API_URL;
  const barChartTitle = "Activité quotidienne";

  const { data, isLoading, error } = useFetch(
    `${API_URL}/user/${userId}/activity`
  );
  const activity = data ? new Activity(data) : null;
  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error /> : null}
      {activity && (
        <BarChartContainer title={barChartTitle} data={activity.sessions} />
      )}
    </>
  );
};

export default ActivityComponent;
