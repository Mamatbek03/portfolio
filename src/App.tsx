import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Element } from "react-scroll";
import Projcets from "./components/Projects/Projcets";
import WaveWater from "./animations/WaveWater/WaveWater";
import Contacts from "./components/Contacts/Contacts";
const App = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  console.log(isDarkTheme);

  // function clTheme(num: number, className: string) {
  //   const themeType = isDarkTheme ? "dark" : "light";
  //   const suffix = num === 1 ? "first" : num === 2 ? "second" : "third";
  //   return `${className} ${suffix}-${themeType}`;
  // }
  return (
    <>
      <Navbar setDarkTheme={setDarkTheme} />
      <Element name="home">
        <Home />
      </Element>{" "}
      <WaveWater />
      <Element name="about">
        <About />
      </Element>
      <WaveWater reverse={true} />
      <Element name="projects">
        <Projcets />
      </Element>
      <WaveWater />
      <Element name="contacts">
        <Contacts />
      </Element>
    </>
  );
};

export default App;
