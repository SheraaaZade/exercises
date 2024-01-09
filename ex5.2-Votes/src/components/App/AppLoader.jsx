import App from "./App";
import { ProviderWrapper as OpinionProvider } from "../../contexts/opinionContext";

const AppLoader = () => {
  return (
    <OpinionProvider>
      <App />
    </OpinionProvider>
  );
};

export default AppLoader;
