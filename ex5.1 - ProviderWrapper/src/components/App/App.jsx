import { useContext } from "react";
import "../../App.css";
import OkButton from "../Button/OkButton";
import BadButton from "../Button/BadButton";
import ResetButton from "../Button/ResetButton";
import GoodButton from "../Button/GoodButton";
import { Context as CounterContext } from "../../contexts/countersContext";

function App() {
  const { goodCounter, okCounter, badCounter } = useContext(CounterContext);

  return (
    <>
      <ul>
        <li>
          <span>Good : {goodCounter}</span> <GoodButton />
        </li>
        <li>
          <span>Ok : {okCounter}</span> <OkButton />
        </li>
        <li>
          <span>Bad : {badCounter}</span> <BadButton />
        </li>
      </ul>
      <ResetButton />
    </>
  );
}

export default App;
