import "./Projects.css";
const Projcets = () => {
  return (
    <div className="projects">
      <div className="projects__content">
        <div className="projects__head">
          <h3 className="projects__nav">PROJECTS</h3>
          <h3 className="projects__title">
            Each project is a unique piece of development 🧩
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
