import { Outlet } from "react-router-dom";

import Header from "../widgets/Header/Header";
import ModalDescription from "../widgets/modals/ModalDescription/ModalDescription";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <ModalDescription />
    </div>
  );
};

export default App;
