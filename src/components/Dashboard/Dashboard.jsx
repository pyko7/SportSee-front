import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
import CardContainer from "../CardContainer/CardContainer";
import User from "../../model/User";
import Error from "../../pages/Error/Error";
import Loader from "../common/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
import Score from "../Score/Score";
import ActivityComponent from "../Activity/Activity";
import AverageSessionsComponent from "../AverageSessions/AverageSessions";
import PerformanceComponent from "../Performance/Performance";

/**
 * @description Represents all charts elements and the cards list
 * @returns {React.FC}
 */
const Dashboard = () => {
  const userId = import.meta.env.VITE_USER_ID;
  const API_URL = import.meta.env.VITE_API_URL;

  const { data, isLoading, error } = useFetch(`${API_URL}/user/${userId}`);
  const user = data ? new User(data) : null;
  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? <Error /> : null}
      <div className="dashboard">
        {user && <DashboardHeader firstName={user.firstName} />}
        <div className="charts-cards-container">
          <div className="charts-container">
            <ActivityComponent />
            <div className="charts-bottom-container ">
              <AverageSessionsComponent />
              <PerformanceComponent />
              {user && (
                <Score
                  score={user.todayScore}
                  isLoading={isLoading}
                  error={error}
                />
              )}
            </div>
          </div>
          <div className="cards-container">
            {user && (
              <CardContainer
                calorieCount={user.calorieCount}
                proteinCount={user.proteinCount}
                carbohydrateCount={user.carbohydrateCount}
                lipidCount={user.lipidCount}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
