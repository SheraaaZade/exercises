import App from "./App";
import { ProviderWrapper as ProviderButton } from "../../contexts/countersContext";

const AppLoader = () => {
  return (
    <ProviderButton>
      <App />
    </ProviderButton>
  );
};

export default AppLoader;
