import { ProviderWrapper as OpinionWrapper } from "../../contexts/OpinionContext";
import { ProviderWrapper as ThemeProvider } from "../../contexts/themeContext";
import App from "./App";

const AppLoader = () => {
  return (
    <ThemeProvider>
      <OpinionWrapper>
        <App />
      </OpinionWrapper>
    </ThemeProvider>
  );
};

export default AppLoader;
