import Error from "../../pages/Error/Error";
import RadialBarChartContainer from "../RadialBarChart/RadialBarChartContainer";
import Loader from "../common/Loader/Loader";

const Score = ({ score, isLoading, error }) => {
  const radarBarChartTitle = "Score";

  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error /> : null}
      {score && (
        <RadialBarChartContainer title={radarBarChartTitle} data={score} />
      )}
    </>
  );
};

export default Score;
