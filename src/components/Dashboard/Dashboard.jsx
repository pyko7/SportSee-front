import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
import BarChartContainer from "../BarChart/BarChartContainer";
import LineChartContainer from "../LineChart/LineChartContainer";
import RadarChartContainer from "../RadarChart/RadarChartContainer";
import RadialBarChartContainer from "../RadialBarChart/RadialBarChartContainer";

const Dashboard = ({
  firstName,
  activity,
  averageSessions,
  performance,
  score,
}) => {
  const barChartTitle = "Activité quotidienne";
  const lineChartTitle = "Durée moyenne des sessions";

  return (
    <div className="dashboard">
      {/* <DashboardHeader firstName={firstName} />
      <BarChartContainer title={barChartTitle} data={activity.sessions} />
      <LineChartContainer
        title={lineChartTitle}
        data={averageSessions.sessions}
      />
      <RadarChartContainer data={performance} /> */}
      <RadialBarChartContainer data={score} />
    </div>
  );
};

export default Dashboard;
