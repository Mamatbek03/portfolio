import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import MenuLight from "../../assets/menu-burger-light.svg";
import MenuDark from "../../assets/menu-burger-dark.svg";
import CloseLight from "../../assets/close-light.svg";
import CloseDark from "../../assets/close-dark.svg";

import Language from "../../func/Language";
import Theme from "../../func/theme/Theme";
import "./Navbar.css";

interface NavbarProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ isDarkTheme, toggleTheme }) => {
  const [menu, setMenu] = useState<boolean>(false);

  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
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
      <div onClick={openMenu} className="burger-menu">
        <img src={isDarkTheme ? MenuDark : MenuLight} alt="" />
      </div>
      <div
        className={`${isDarkTheme ? "navbar__menu-dark" : "navbar__menu"} ${
          menu ? "open" : "close"
        }`}
      >
        <img
          className="navbar__menu-img"
          onClick={closeMenu}
          src={isDarkTheme ? CloseDark : CloseLight}
          alt=""
        />

        <ul className="navbar__menu-list">
          {" "}
          <div className="navbar__menu-func">
            <Language
              text={t("language")}
              className={
                isDarkTheme
                  ? "navbar__menu-locales-dark"
                  : "navbar__menu-locales"
              }
            />
            <Theme isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          </div>
          <Link to="home" smooth={true}>
            <li
              onClick={closeMenu}
              className={
                isDarkTheme ? "navbar__menu-item-dark" : "navbar__menu-item"
              }
            >
              {t("Home")}
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li
              onClick={closeMenu}
              className={
                isDarkTheme ? "navbar__menu-item-dark" : "navbar__menu-item"
              }
            >
              {t("About me")}
            </li>
          </Link>
          <Link to="projects" smooth={true}>
            <li
              onClick={closeMenu}
              className={
                isDarkTheme ? "navbar__menu-item-dark" : "navbar__menu-item"
              }
            >
              {t("Projects")}
            </li>
          </Link>
          <Link to="contacts" smooth={true}>
            <li
              onClick={closeMenu}
              className={
                isDarkTheme ? "navbar__menu-item-dark" : "navbar__menu-item"
              }
            >
              {t("Contacts")}
            </li>
          </Link>
        </ul>
      </div>
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

      <div className={"navbar__func"}>
        <Language
          text={t("lang")}
          className={isDarkTheme ? "navbar__locales-dark" : "navbar__locales"}
        />
        <Theme isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Navbar;
