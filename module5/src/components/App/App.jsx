import "../../App.css";
import ProviderWrapper from "../../contexts/LanguageContext";
import FoorbarButton from "../FoorbarButton/FoorbarButton";

function App() {
  return (<>

    <ProviderWrapper>

      <div>
        <h1>Language Picker</h1>
        <FoorbarButton/>
      </div>
    </ProviderWrapper>
    
  </>);
}

export default App;
