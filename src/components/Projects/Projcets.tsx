import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  isDarkTheme: boolean;
}
const Projcets: React.FC<ProjectsProps> = ({ isDarkTheme }) => {
  const { t } = useTranslation();
  return (
    <div className={isDarkTheme ? "projects-dark" : "projects"}>
      <div className="projects__content">
        <div className="projects__head">
          <h3 className="projects__nav">{t("PROJECTS")}</h3>
          <h3
            className={isDarkTheme ? "projects__title-dark" : "projects__title"}
          >
            {t("Each project is a unique piece of development 🧩")}
          </h3>
        </div>
        <div className="projects__list">
          <div className="projects__item">
            <a href="" target="blank" rel="nofollow">
              <img className="projects__item-img" src="" alt="" />
            </a>
            <div className="projects__item-text">
              <h3 className="projects__text-head"></h3>
              <p className="projects__text-ph"></p>
              <div className="projects__item-stack"></div>
            </div>
          </div>
          <div className="projects__project-item">
            <a href="" target="blank" rel="nofollow">
              <img className="projects__item-img" src="" alt="" />
            </a>
            <div className="projects__item-text">
              <h3 className="projects__text-head"></h3>
              <p className="projects__text-ph"></p>
              <div className="projects__item-stack"></div>
            </div>
          </div>
          <div className="projects__project-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Projcets;
