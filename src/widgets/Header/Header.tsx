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
    return classNames("item", location.pathname === item.path ? "active" : "");
  };
  return (
    <header className="header">
      <div className="header__wrapper container">
        <nav className="header__nav">
          <ul className="list">
            {navItems.map((item, index) => (
              <li className={itemClassName(item)} key={index}>
                <Link className="link" to={item.path}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__language-switching">
          <button>PL</button>
          <button>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
