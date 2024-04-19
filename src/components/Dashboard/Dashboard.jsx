import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  return <DashboardHeader firstName={user.userInfos.firstName} />;
};

export default Dashboard;
