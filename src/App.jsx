import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useFetch } from "./hooks/useFetch";
import Loader from "./components/common/Loader/Loader";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/user/12");
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
