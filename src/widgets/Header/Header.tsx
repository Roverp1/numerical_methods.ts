import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li className="header__list-item">
          <Link to={"/"}>Bisection</Link>
        </li>
        <li className="header__list-item">
          <Link to={"/interpolation"}>Interpolation</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
