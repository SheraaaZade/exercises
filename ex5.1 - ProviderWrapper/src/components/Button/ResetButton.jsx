import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/countersContext";

const ResetButton = () => {
  const { resetAll } = useContext(CounterContext);
  return <button onClick={resetAll}>Reset scores</button>;
};

export default ResetButton;
