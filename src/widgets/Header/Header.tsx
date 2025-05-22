import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

import "./Header.scss";

type NavItem = {
  text: string;
  path: string;
};

const navItems = [
  {
    text: "Bisection",
    path: "/",
  },
  {
    text: "Interpolation",
    path: "/interpolation",
  },
  {
    text: "tralalelo tralala",
    path: "/temp",
  },
  {
    text: "bobrito kurvito",
    path: "/temp",
  },
];

const Header = () => {
  const location = useLocation();

  const itemClassName = (item: NavItem) => {
    return classNames("nav__list-item", location.pathname === item.path ? "active" : "");
  };
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list">
          {navItems.map((item, index) => (
            <li className={itemClassName(item)} key={index}>
              <Link className="nav__list-item-link" to={item.path}>
                {item.text}
              </Link>
            </li>
          ))}
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
