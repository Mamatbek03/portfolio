import "./Home.css";

import GithubLight from "../../assets/github-light.svg";
import TelegramLight from "../../assets/tg-light.svg";
import LinkedInLight from "../../assets/linkedin-light.svg";
import GithubDark from "../../assets/github-dark.svg";
import TelegramDark from "../../assets/tg-dark.svg";
import LinkedInDark from "../../assets/linkedin-dark.svg";

import FlagKyrgyzstan from "../../assets/flagKyrgyzstan.svg";
import JavaScript from "../../assets/javascript.svg";
import TypeScript from "../../assets/typescript.svg";
import ReactLight from "../../assets/react-light.svg";
import NodeJsLight from "../../assets/nodejs-light.svg";
import Webpack from "../../assets/webpack.svg";
import ViteLight from "../../assets/vite-light.svg";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";

import HeadText from "../../animations/HeadText/HeadText";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface HomeProps {
  isDarkTheme: boolean;
}
const Home: React.FC<HomeProps> = ({ isDarkTheme }) => {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
    }
  }, []);

  const { t } = useTranslation();

  return (
    <div className={isDarkTheme ? "home-dark" : "home"}>
      <div className="home__person">
        <div className="home__job">
          <HeadText
            className={isDarkTheme ? "home__job-title-dark" : "home__job-title"}
            text="Front-end React Developer"
          />

          <p className={isDarkTheme ? "home__job-ph-dark" : "home__job-ph"}>
            {t("Hi, I'm")}
            <span
              className={
                isDarkTheme ? "home__job-ph-name-dark" : "home__job-ph-name"
              }
            >
              {t("Kamytov Mamatbek")}
            </span>
            {t(
              ". A passionate Front-end React Developer based in Bishkek , Kyrgyzstan."
            )}
            <img className="home__job-flag" src={FlagKyrgyzstan} alt="" />
          </p>
          <div className="home__job-links">
            <a href="">
              <img
                className="home__job-link"
                src={isDarkTheme ? TelegramDark : TelegramLight}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="home__job-link"
                src={isDarkTheme ? GithubDark : GithubLight}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="home__job-link"
                src={isDarkTheme ? LinkedInDark : LinkedInLight}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="home__job-photo"></div>
      </div>
      <div className="home__stack">
        <span
          className={
            isDarkTheme ? "home__stack-title-dark" : "home__stack-title"
          }
        >
          {t("Tech Stack")}
        </span>
        <ul className="home__stack-icons">
          <div className="home__stack-first-icons">
            <li>
              <img className="home__stack-icon" src={Html} alt="" />
            </li>
            <li>
              <img className="home__stack-icon" src={Css} alt="" />
            </li>
            <li>
              <img className="home__stack-icon" src={JavaScript} alt="" />
            </li>
            <li>
              <img className="home__stack-icon" src={TypeScript} alt="" />
            </li>
          </div>
          <div className="home__stack-second-icons">
            <li>
              <img className="home__stack-icon" src={ReactLight} alt="" />
            </li>
            <li>
              <img className="home__stack-icon" src={NodeJsLight} alt="" />
            </li>
            <li>
              <img className="home__stack-icon" src={Webpack} alt="" />
            </li>
            <li>
              <img className="home__stack-icon" src={ViteLight} alt="" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Home;
