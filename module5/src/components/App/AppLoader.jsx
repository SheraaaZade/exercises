import App from "./App";
import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/LanguageContext";

const AppLoader = () => {
  return (
    <LanguageProviderWrapper>
      <App />
    </LanguageProviderWrapper>
  );
};

export default AppLoader;
