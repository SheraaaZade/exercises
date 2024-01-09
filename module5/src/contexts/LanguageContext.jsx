import React from "react";
import { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {

  const [language, setLanguage] = useState("fr");

  const pickLangugage = (newLanguage) => {

    if (newLanguage !== "fr" && newLanguage !== "en")
      throw "Invalid language selected : " + newLanguage;
    
    setLanguage(newLanguage);
  };

  const exposedValue = { language, pickLangugage };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export default { Context, ProviderWrapper };
