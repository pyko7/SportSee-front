import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useFetch } from "./hooks/useFetch";
import Loader from "./components/common/Loader/Loader";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  const userId = 12;
  const {
    data: user,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/user/${userId}`);

  const { data: userActivity } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  );

  const { data: userAverageSessions } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );

  const { data: userPerformances } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  );

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
          {user && <Dashboard user={user.data} />}
        </div>
      </main>
    </div>
  );
};

export default App;
