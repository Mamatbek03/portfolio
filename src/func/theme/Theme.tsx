import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "./Theme.css";

interface ThemeProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  big?: boolean;
}

const Theme: React.FC<ThemeProps> = ({ isDarkTheme, toggleTheme, big }) => {
  return (
    <div>
      <div
        onClick={toggleTheme}
        className={`${big ? "toggle-big" : "toggle"} ${
          !isDarkTheme ? "dark" : "light"
        }`}
      >
        <img className={`${big ? "sun-big" : "sun"}`} src={sun} alt="" />
        <img className={`${big ? "moon-big" : "moon"}`} src={moon} alt="" />
        <div
          className={`${big ? "ball-big" : "ball"} ${
            isDarkTheme ? "dark m-right" : "light m-left"
          }
          `}
        ></div>
      </div>
    </div>
  );
};

export default Theme;
