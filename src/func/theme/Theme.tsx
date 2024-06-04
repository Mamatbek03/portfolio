import { useState } from "react";
import darkTheme from "../../assets/darkTheme.svg";
import lightTheme from "../../assets/lightTheme.svg";
import "./Theme.css";

interface ThemeProps {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Theme: React.FC<ThemeProps> = ({ setDarkTheme }) => {
  const [isDark, setDark] = useState<boolean>(false);
  const toggleTheme = () => {
    setDarkTheme((prev: boolean) => {
      setDark(!prev);
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return !prev;
    });
  };

  return (
    <div>
      <input id="checkbox" type="checkbox" />
      <label
        onClick={toggleTheme}
        className={`label ${!isDark ? "dark" : "light"}`}
        htmlFor="checkbox"
      >
        <img className="sun" src={lightTheme} alt="" />
        <img className="moon" src={darkTheme} alt="" />
        <div className={`ball ${isDark ? "dark" : "light"}`}></div>
      </label>
    </div>
  );
};

export default Theme;
