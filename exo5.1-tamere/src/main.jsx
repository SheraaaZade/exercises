import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import { ProviderWrapper as ButtonWrapper } from "./contexts/ButtonsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ButtonWrapper>
    <App />
  </ButtonWrapper>
);
