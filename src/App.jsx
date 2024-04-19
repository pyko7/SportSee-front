import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useFetch } from "./hooks/useFetch";
import Loader from "./components/common/Loader/Loader";
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
          {user && (
            <div className="title-subtitle-container">
              <p className="title">
                Bonjour <span>{user.data.userInfos.firstName}</span>
              </p>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
