import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
import BarChart from "../BarChart/BarChart";

const Dashboard = ({ user }) => {
  return (
    <>
      <DashboardHeader firstName={user.userInfos.firstName} />
      <BarChart />
    </>
  );
};

export default Dashboard;
