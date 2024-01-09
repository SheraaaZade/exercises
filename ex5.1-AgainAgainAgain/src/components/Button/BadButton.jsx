import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";

const BadButton = () => {
  const {increaseBad, countBad} = useContext(ButtonContext);

  return (
    <div>
        <label >Bad </label>
      <button onClick={increaseBad}> Bad {countBad} </button>
    </div>
  );
};

export default BadButton;
