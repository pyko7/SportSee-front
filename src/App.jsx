import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useFetch } from "./hooks/useFetch";
import Loader from "./components/common/Loader/Loader";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import User from "./model/User";
import Activity from "./model/Activity";
import AverageSessions from "./model/AverageSessions";
import Performance from "./model/Performance";
import Error from "./pages/Error/Error";

const App = () => {
  const userId = 12; //add to url
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    data: userData,
    isLoading,
    error,
  } = useFetch(`${API_URL}/user/${userId}`);
  const user = userData ? new User(userData) : null;

  const { data: userActivity } = useFetch(`${API_URL}/user/${userId}/activity`);
  const activity = userActivity ? new Activity(userActivity) : null;

  const { data: userAverageSessions } = useFetch(
    `${API_URL}/user/${userId}/average-sessions`
  );
  const averageSessions = userAverageSessions
    ? new AverageSessions(userAverageSessions)
    : null;

  const { data: userPerformances } = useFetch(
    `${API_URL}/user/${userId}/performance`
  );
  const performance = userPerformances
    ? new Performance(userPerformances)
    : null;

  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar />
        <div className="container">
          {isLoading && <Loader />}
          {error && <Error />}
          {user && activity && averageSessions && performance && (
            <Dashboard
              activity={activity}
              averageSessions={averageSessions}
              firstName={user.firstName}
              performance={performance}
              score={user.todayScore}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
