import "./About.css";
import WorkSpace from "../../assets/workspace.webp";
const About = () => {
  return (
    <div className="about">
      <img className="about__work-img" src={WorkSpace} alt="" />
      <div className="about__text">
        <h3 className="about__nav">ABOUT ME</h3>
        <h3 className="about__title">A volved Front-end Developer 👨🏻‍💻 </h3>

        <p className="about__ph">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
