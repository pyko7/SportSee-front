import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
import BarChartContainer from "../BarChart/BarChartContainer";
import LineChartContainer from "../LineChart/LineChartContainer";
import RadarChartContainer from "../RadarChart/RadarChartContainer";
import RadialBarChartContainer from "../RadialBarChart/RadialBarChartContainer";
import CardContainer from "../CardContainer/CardContainer";

const Dashboard = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
  firstName,
  activity,
  averageSessions,
  performance,
  score,
}) => {
  const barChartTitle = "Activité quotidienne";
  const lineChartTitle = "Durée moyenne des sessions";
  const radarBarChartTitle = "Score";

  return (
    <div className="dashboard">
      <DashboardHeader firstName={firstName} />
      <div className="charts-cards-container">
        <div className="charts-container">
          <BarChartContainer title={barChartTitle} data={activity.sessions} />
          <div className="charts-bottom-container ">
            <LineChartContainer
              title={lineChartTitle}
              data={averageSessions.sessions}
            />
            <RadarChartContainer data={performance} />
            <RadialBarChartContainer title={radarBarChartTitle} data={score} />
          </div>
        </div>
        <div className="cards-container">
          <CardContainer
            calorieCount={calorieCount}
            proteinCount={proteinCount}
            carbohydrateCount={carbohydrateCount}
            lipidCount={lipidCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
