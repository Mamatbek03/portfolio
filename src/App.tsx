import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Element } from "react-scroll";
import Projcets from "./components/Projects/Projcets";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
const App = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  console.log(!!localStorage.getItem("theme"));
  console.log(localStorage.getItem("theme"));

  const [isDarkTheme, setDarkTheme] = useState<boolean>(
    localStorage.getItem("theme") === "dark" || false
  );
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  return (
    <>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Element name="home">
        <Home isDarkTheme={isDarkTheme} />
      </Element>
      <Element name="about">
        <About isDarkTheme={isDarkTheme} />
      </Element>
      <Element name="projects">
        <Projcets isDarkTheme={isDarkTheme} />
      </Element>
      <Element name="contacts">
        <Contacts isDarkTheme={isDarkTheme} />
      </Element>
      <Footer />
    </>
  );
};

export default App;
