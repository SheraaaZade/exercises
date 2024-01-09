import App from "./App";
import { ProviderWrapper as OpinionWrapper } from "../../contexts/OpinionContext";

const AppLoader = () => {
  return (
    <OpinionWrapper>
      <App />
    </OpinionWrapper>
  );
};

export default AppLoader;
