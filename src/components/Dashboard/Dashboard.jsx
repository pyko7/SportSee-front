import DashboardHeader from "./DashboardHeader";
import "./Dashboard.css";
// import BarChart from "../BarChart/BarChart";

const Dashboard = ({ firstName }) => {
  return (
    <>
      <DashboardHeader firstName={firstName} />
      {/* <BarChart /> */}
    </>
  );
};

export default Dashboard;
