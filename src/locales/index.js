import { LANGUAGE } from "../tools/constants";
import { en } from "./EN";
import { ru } from "./RU";
import { gr } from "./GR";

export const flagImages = {
  en: "/img/usa.png",
  ru: "/img/russia.png",
  gr: "/img/germany.png",
};

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE) || "en";
};

export const getText = (word) => {
  const language = getLanguage();

  switch (language) {
    case "en":
      return en[word];
    case "ru":
      return ru[word];
    case "gr":
      return gr[word];
    default:
      return en[word];
  }
};
