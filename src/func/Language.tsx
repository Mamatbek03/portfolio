import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageProps {
  className: string;
}

const Language: React.FC<LanguageProps> = ({ className }) => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (): void => {
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button className={className} onClick={changeLanguage}>
      {t("language")}
    </button>
  );
};

export default Language;
