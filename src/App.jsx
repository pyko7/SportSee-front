import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useFetch } from "./hooks/useFetch";
import Loader from "./components/common/Loader/Loader";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import User from "./model/User";
import Activity from "./model/Activity";
import AverageSessions from "./model/AverageSessions";
import { useEffect } from "react";

const App = () => {
  const userId = 12; //add to url
  const {
    data: userData,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/user/${userId}`);

  const user = userData ? new User(userData) : null;

  const { data: userActivity } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  );

  const activity = userActivity ? new Activity(userActivity) : null;

  const { data: userAverageSessions } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );

  const averageSessions = userAverageSessions
    ? new AverageSessions(userAverageSessions)
    : null;

  const { data: userPerformances } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  );

  const performance = userPerformances ? new Activity(userPerformances) : null;

  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar />
        <div className="container">
          {isLoading && <Loader />}
          {error && (
            <p>Une erreur est survenue lors de la récupération des données</p>
          )}
          {user && <Dashboard firstName={user.firstName} />}
        </div>
      </main>
    </div>
  );
};

export default App;
