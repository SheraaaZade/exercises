import App from "./App";
import { ProviderWrapper as Provider } from "../../contexts/ButtonContext";

const AppLoader = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

export default AppLoader;
