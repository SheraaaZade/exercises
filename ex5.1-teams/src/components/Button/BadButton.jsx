import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/ButtonContext";

const BadButton = () => {
  const { countBad, increaseBad } = useContext(ButtonContext);

  return (
    <>
      <label>Bad {countBad} </label>
      <button onClick={increaseBad}> Increase </button>
    </>
  );
};

export default BadButton;
