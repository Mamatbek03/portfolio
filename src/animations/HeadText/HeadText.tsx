import React, { useState, useEffect } from "react";
import Waving from "../../assets/waving.svg";
import "./HeadText.css";
interface HeadTextProps {
  className: string;
  text: string;
}

const HeadText: React.FC<HeadTextProps> = ({ className, text }) => {
  const [visibleText, setVisibleText] = useState<string>("");
  const [wave, setWave] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length - 1) {
        if (index === 0) {
          setVisibleText((prevText) => prevText + text[index]);
        }
        setVisibleText((prevText) => prevText + text[index]);

        index = index + 1;
      } else {
        clearInterval(intervalId);
        setWave(true);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className={className}>
      {visibleText} {wave && <img className="wave-hand" src={Waving} alt="" />}
    </h1>
  );
};

export default HeadText;
