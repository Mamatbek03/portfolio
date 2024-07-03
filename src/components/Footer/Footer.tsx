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
            Copyright © 2024. All rights are reserved
          </div>
          <div className="footer-links">
            <a href="">
              <img src={Telegram} alt="" />
            </a>
            <a href="">
              <img src={Github} alt="" />
            </a>
            <a href="">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
