import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/ButtonsContext";

const GoodButton = () => {
  const { counterGood, increaseGood } = useContext(ButtonContext);

  return (
    <>
      <label>Good: {counterGood}</label>
      <button onClick={increaseGood}> Increase Good</button>
    </>
  );
};

export default GoodButton;
