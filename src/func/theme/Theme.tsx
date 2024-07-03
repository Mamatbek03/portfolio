import darkTheme from "../../assets/darkTheme.svg";
import lightTheme from "../../assets/lightTheme.svg";
import "./Theme.css";

interface ThemeProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const Theme: React.FC<ThemeProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div>
      <input id="checkbox" type="checkbox" />
      <label
        onClick={toggleTheme}
        className={`label ${!isDarkTheme ? "dark" : "light"}`}
        htmlFor="checkbox"
      >
        <img className="sun" src={lightTheme} alt="" />
        <img className="moon" src={darkTheme} alt="" />
        <div className={`ball ${isDarkTheme ? "dark" : "light"}`}></div>
      </label>
    </div>
  );
};

export default Theme;
