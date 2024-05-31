import Performance from "../../model/Performance";
import Loader from "../common/Loader/Loader";
import Error from "../../pages/Error/Error";
import { useFetch } from "../../hooks/useFetch";
import RadarChartContainer from "../RadarChart/RadarChartContainer";
import { useParams } from "react-router-dom";

/**
 * @description Fetch user performance data and display the RadarChartContainer component
 * @returns {React.FC}
 */
const PerformanceComponent = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `${API_URL}/user/${id}/performance`
  );
  const performance = data ? new Performance(data) : null;
  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error error={error} /> : null}
      {performance && <RadarChartContainer data={performance} />}
    </>
  );
};

export default PerformanceComponent;
