import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";

const GoodButton = () => {
  const {increaseGood, countGood} = useContext(ButtonContext);

  return (
    <div>
        <label >Good </label>
      <button onClick={increaseGood}> Good {countGood} </button>
    </div>
  );
};

export default GoodButton;
