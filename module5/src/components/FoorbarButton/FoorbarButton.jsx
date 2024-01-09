import { useContext } from "react";
import  { Context as LanguageContext } from "../../contexts/LanguageContext";

const FoorbarButton = () => {
  const { language, pickLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => pickLanguage("en")}>English</button>
      <button onClick={() => pickLanguage("fr")}>French</button>
    </div>
  );
};

export default FoorbarButton;
