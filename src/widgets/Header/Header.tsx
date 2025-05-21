import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="nav__list-item-link" to={"/"}>
              Bisection
            </Link>
          </li>

          <li className="nav__list-item">
            <Link to={"/interpolation"}>Interpolation</Link>
          </li>

          <li className="nav__list-item">
            <Link to={"/temp"}>tralalelo tralala</Link>
          </li>

          <li className="nav__list-item">
            <Link to={"/temp"}>bobrito kurvito</Link>
          </li>
        </ul>
      </nav>

      <div className="header__language-switching">
        <button>PL</button>
        <button>UK</button>
      </div>
    </header>
  );
};

export default Header;
