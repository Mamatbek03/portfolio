import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageProps {
  className?: string;
  text?: string;
}

const Language: React.FC<LanguageProps> = ({ className, text }) => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (): void => {
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <span className={className} onClick={changeLanguage}>
      {text}
    </span>
  );
};

export default Language;
