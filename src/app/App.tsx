import { Outlet } from "react-router-dom";

import Header from "../widgets/Header/Header";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
