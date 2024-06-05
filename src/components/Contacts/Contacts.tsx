import Gmail from "../../assets/email-light.svg";
import Phone from "../../assets/phone-light.svg";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__content">
        <div className="contacts__head">
          <h3 className="contacts__nav">Contacts</h3>
          <h3 className="contacts__label">
            I'd love to hear from you! Drop me a line! 👇
          </h3>
        </div>
        <div className="contacts__body">
          <div className="contacts__cv">
            <div className="contacts__cs_btns">
              <button className="contacts__cs-view">view CV</button>
              <button className="contacts__cs-download">download CV</button>
            </div>
          </div>
          <div className="contacts__list">
            <div className="contacts__item">
              <img className="contacts__contact-img" src={Gmail} alt="" />{" "}
              <div className="contacts__contact-info">
                <h3>Mail</h3>
                <a href="">kamytov.m.d@gmail.com</a>
              </div>
            </div>
            <div className="contacts__item">
              <img className="contacts__contact-img" src={Phone} alt="" />{" "}
              <div className="contacts__contact-info">
                <h3>Phone</h3>
                <a href="">+996 507 24 12 03</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
