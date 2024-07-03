import "./WaveWater.css";
interface WaveWaterProps {
  isDarkTheme: boolean;
  reverse?: boolean;
}

const WaveWater: React.FC<WaveWaterProps> = ({ isDarkTheme, reverse }) => {
  return (
    <section
      className={`wave-container ${reverse ? "reverse" : ""} ${
        isDarkTheme ? "dark" : ""
      }`}
    >
      <div className="wave water1"></div>
      <div className="wave water2"></div>
      <div className="wave water3"></div>
      <div className="wave water4"></div>
    </section>
  );
};

export default WaveWater;
