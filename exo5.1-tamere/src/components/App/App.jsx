import "../../App.css";
import BadButton from "../Button/BadButton";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import { Context as ButtonContext } from "../../contexts/ButtonsContext";
import { useContext } from "react";

function App() {
  const { resetAll } = useContext(ButtonContext);

  return (
    <>
      <div>
        <OkButton />
      </div>
      <div>
        <BadButton />
      </div>
      <div>
        <GoodButton />
      </div>
      <button onClick={resetAll}>Reset</button>
    </>
  );
}

export default App;
