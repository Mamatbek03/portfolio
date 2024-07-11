import "./Footer.css";
import LinkedIn from "../../assets/linkedin-dark.svg";
import Telegram from "../../assets/tg-dark.svg";
import Github from "../../assets/github-dark.svg";

const Footer = () => {
  return (
    <>
      <div className="white-line"></div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-text">
            <span className="footer-text-first">Copyright © 2024.</span>{" "}
            <span className="footer-text-second">All rights are reserved</span>
          </div>
          <div className="footer-links">
            <a
              aria-label="telegram"
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/Mamatbek"
            >
              <img src={Telegram} alt="" />
            </a>
            <a
              aria-label="github"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Mamatbek03"
            >
              <img src={Github} alt="" />
            </a>
            <a
              aria-label="linkedin"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/маматбек-камытов-6a801a2a4/?locale=en_US"
            >
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
