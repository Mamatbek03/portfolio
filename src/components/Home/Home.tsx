import "./Home.css";
import FlagKyrgyzstan from "../../assets/flagKyrgyzstan.svg";
import GithubLight from "../../assets/github-light.svg";
import Telegram from "../../assets/telegram.svg";
import JavaScript from "../../assets/javascript.svg";
import TypeScript from "../../assets/typescript.svg";
import ReactLight from "../../assets/react-light.svg";
import NodeJsLight from "../../assets/nodejs-light.svg";
import Webpack from "../../assets/webpack.svg";
import ViteLight from "../../assets/vite-light.svg";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import HeadText from "../../animations/HeadText/HeadText";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__person">
        <div className="home__job">
          <HeadText
            className="home__job-title"
            text="Front-end React Developer"
          />

          <p className="home__job-ph">
            Hi, I'm{" "}
            <span style={{ color: "blue", fontWeight: "600" }}>
              Kamytov Mamatbek
            </span>
            . A passionate Front-end React Developer based in Bishkek,
            Kyrgyzstan.
            <img className="home__job-flag" src={FlagKyrgyzstan} alt="" />
          </p>
          <div className="home__job-links">
            <a href="">
              <img className="home__job-link" src={Telegram} alt="" />
            </a>
            <a href="">
              <img className="home__job-link" src={GithubLight} alt="" />
            </a>
          </div>
        </div>
        <div className="home__job-photo"></div>
      </div>
      <div className="home__stack">
        <span className="home__stack-title">Tech Stack</span>
        <ul className="home__stack-icons">
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
        </ul>
      </div>
    </div>
  );
};

export default Home;
