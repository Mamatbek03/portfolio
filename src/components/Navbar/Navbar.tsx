import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import Language from "../../func/Language";
import Theme from "../../func/theme/Theme";
import "./Navbar.css";
import { useEffect } from "react";

interface NavbarProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ isDarkTheme, toggleTheme }) => {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
    }
  }, []);
  const { t } = useTranslation();
  return (
    <div className={isDarkTheme ? "navbar-dark" : "navbar"}>
      <h3 className={isDarkTheme ? "navbar__logo-dark" : "navbar__logo"}>
        {"< " + "Mamatbek />"}
      </h3>
      <div className={"navbar__menu"}>
        <ul className={"navbar__list"}>
          <Link to="home" smooth={true}>
            <li className={isDarkTheme ? "navbar__item-dark" : "navbar__item"}>
              {t("Home")}
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li className={isDarkTheme ? "navbar__item-dark" : "navbar__item"}>
              {t("About me")}
            </li>
          </Link>
          <Link to="projects" smooth={true}>
            <li className={isDarkTheme ? "navbar__item-dark" : "navbar__item"}>
              {t("Projects")}
            </li>
          </Link>
          <Link to="contacts" smooth={true}>
            <li className={isDarkTheme ? "navbar__item-dark" : "navbar__item"}>
              {t("Contacts")}
            </li>
          </Link>
        </ul>
      </div>
      <div className={"navbar__func"}>
        <Language
          className={isDarkTheme ? "navbar__locales-dark" : "navbar__locales"}
        />
        <Theme isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Navbar;
