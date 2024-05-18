import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar />
        <div className="container">
          <Dashboard />
        </div>
      </main>
    </div>
  );
};

export default App;
