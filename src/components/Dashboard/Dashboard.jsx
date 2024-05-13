import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
import BarChartContainer from "../BarChart/BarChartContainer";
import LineChartContainer from "../LineChart/LineChartContainer";

const Dashboard = ({ firstName, activity, averageSessions }) => {
  const barChartTitle = "Activité quotidienne";
  const lineChartTitle = "Durée moyenne des sessions";
  return (
    <div className="dashboard">
      <DashboardHeader firstName={firstName} />
      <BarChartContainer title={barChartTitle} data={activity.sessions} />
      <LineChartContainer
        title={lineChartTitle}
        data={averageSessions.sessions}
      />
    </div>
  );
};

export default Dashboard;
