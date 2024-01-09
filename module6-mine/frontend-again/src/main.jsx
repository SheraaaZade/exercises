import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ProviderWrapper as PersonWrapper } from "./services/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersonWrapper>
    <App />
  </PersonWrapper>
);
