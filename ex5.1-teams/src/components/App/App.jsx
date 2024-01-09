import { useContext } from "react";
import "../../App.css";
import BadButton from "../Button/BadButton";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import { Context as ContextWrapper } from "../../contexts/ButtonContext";

function App() {
  const { resetAll } = useContext(ContextWrapper);

  return (
    <>
      <BadButton />
      <OkButton />
      <GoodButton />
      <button onClick={resetAll}> Reset </button>
    </>
  );
}

export default App;
