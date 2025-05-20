import { Outlet } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
    </>
  );
};

export default App;
