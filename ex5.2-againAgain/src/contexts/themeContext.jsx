import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const ProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const setDarkTheme = () => setTheme("dark");
  const setLightTheme = () => setTheme("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const getCurrentThemeDetails = () => {
    return themes[theme];
  };

  const themes = {
    light: {
      backgroundColor: "#ffffff",
      primaryTextColor: "#333333",
      secondaryTextColor: "#666666",
      linkColor: "#007bff",
    },
    dark: {
      backgroundColor: "#333333",
      primaryTextColor: "#ffffff",
      secondaryTextColor: "#cccccc",
      linkColor: "#42a5f5",
    },
  };

  const exposedValue = {
    setDarkTheme,
    setLightTheme,
    toggleTheme,
    getCurrentThemeDetails,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

const useTheme = () => useContext(Context);

export { useTheme, ProviderWrapper };
