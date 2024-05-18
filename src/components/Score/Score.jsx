import Error from "../../pages/Error/Error";
import RadialBarChartContainer from "../RadialBarChart/RadialBarChartContainer";
import Loader from "../common/Loader/Loader";

/**
 * @description Display user score
 * @param {number} score user score
 * @param {boolean} isLoading loading state
 * @param {boolean} error error state
 * @returns {React.FC}
 */
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
