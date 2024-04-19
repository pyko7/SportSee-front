import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar />
        <div className="title">
          <p>Bonjour Thomas</p>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      </main>
    </div>
  );
};

export default App;
