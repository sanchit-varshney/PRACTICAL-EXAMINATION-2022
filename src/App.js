import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.css";
import Declaration from "./Declaration";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
      <Declaration />
    </div>
  );
};

export default App;
