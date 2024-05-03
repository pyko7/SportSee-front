import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
import BarChartContainer from "../BarChart/BarChartContainer";

const Dashboard = ({ firstName, activity }) => {
  const barChartTitle = "Activité quotidienne";
  return (
    <div className="dashboard">
      <DashboardHeader firstName={firstName} />
      <BarChartContainer title={barChartTitle} data={activity.sessions} />
    </div>
  );
};

export default Dashboard;
