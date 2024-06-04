import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import Language from "../../func/Language";
import Theme from "../../func/theme/Theme";
import "./Navbar.css";

interface NavbarProps {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  // clTheme: (num: number, className: string) => string;
}
const Navbar: React.FC<NavbarProps> = ({ setDarkTheme }) => {
  const { t } = useTranslation();
  return (
    <div className={"navbar"}>
      <h3 className={"logo"}>{"< " + "Mamatbek />"}</h3>
      <div className="menu">
        <ul className="list">
          <Link to="home" smooth={true}>
            <li className={"item"}>{t("Home")}</li>
          </Link>
          <Link to="about" smooth={true}>
            <li className={"item"}>{t("About me")}</li>
          </Link>
          <Link to="projects" smooth={true}>
            <li className={"item"}>{t("Projects")}</li>
          </Link>
          <Link to="contacts" smooth={true}>
            <li className={"item"}>{t("Contacts")}</li>
          </Link>
        </ul>
      </div>
      <div className="func">
        <Language className={"locales"} />
        <Theme setDarkTheme={setDarkTheme} />
      </div>
    </div>
  );
};

export default Navbar;
