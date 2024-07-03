import { useTranslation } from "react-i18next";
import Gmail from "../../assets/email-light.svg";
import Phone from "../../assets/phone-light.svg";

import "./Contacts.css";

interface ContactsProps {
  isDarkTheme: boolean;
}

const Contacts: React.FC<ContactsProps> = ({ isDarkTheme }) => {
  const { t } = useTranslation();
  return (
    <div className={isDarkTheme ? "contacts-dark" : "contacts"}>
      <div className="contacts__content">
        <div className="contacts__head">
          <h3 className="contacts__nav">{t("CONTACTS")}</h3>
          <h3
            className={isDarkTheme ? "contacts__label-dark" : "contacts__label"}
          >
            {t("I'd love to hear from you! Drop me a line! 👇")}
          </h3>
        </div>
        <div className="contacts__body">
          <div className="contacts__cv">
            <img
              className="contacts__cv-img"
              src="https://resumegenius.com/wp-content/uploads/fun-photo-resume-template-blue.png"
              alt=""
            />
            <div className="contacts__cv-btns">
              <button className="contacts__cv-view">{t("view")} </button>
              <div className="contacts__cv-btns-border"></div>
              <button className="contacts__cv-download">
                {t("download")}{" "}
              </button>
            </div>
          </div>
          <div className="contacts__list">
            <div className="contacts__item">
              <img className="contacts__contact-img" src={Gmail} alt="" />{" "}
              <div className="contacts__contact-info">
                <h3
                  className={
                    isDarkTheme
                      ? "contacts__contact-title-dark"
                      : "contacts__contact-title"
                  }
                >
                  {t("Mail")}
                </h3>
                <a
                  className={
                    isDarkTheme
                      ? "contacts__contact-link-dark"
                      : "contacts__contact-link"
                  }
                  href=""
                >
                  kamytov.m.d@gmail.com
                </a>
              </div>
            </div>
            <div className="contacts__item">
              <img className="contacts__contact-img" src={Phone} alt="" />{" "}
              <div className="contacts__contact-info">
                <h3
                  className={
                    isDarkTheme
                      ? "contacts__contact-title-dark"
                      : "contacts__contact-title"
                  }
                >
                  {t("Phone")}
                </h3>
                <a
                  className={
                    isDarkTheme
                      ? "contacts__contact-link-dark"
                      : "contacts__contact-link"
                  }
                  href=""
                >
                  +996 507 24 12 03
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
