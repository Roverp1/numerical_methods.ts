import { Outlet } from "react-router-dom";

import Header from "../widgets/Header/Header";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
