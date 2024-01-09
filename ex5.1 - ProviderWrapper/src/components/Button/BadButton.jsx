import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/countersContext";

const BadButton = () => {
  const { increaseBad } = useContext(CounterContext);
  return <button onClick={increaseBad}>Increase bad</button>;
};

export default BadButton;
