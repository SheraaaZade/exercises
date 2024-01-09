import { ProviderWrapper as OpinionWrapper } from "../../contexts/OpinionContext";
import App from "./App";

const AppLoader = () => {
  return (
    <OpinionWrapper>
      <App />
    </OpinionWrapper>
  );
};

export default AppLoader;
