import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/ButtonsContext";

const BadButton = () => {
  const { counterBad, increaseBad } = useContext(ButtonContext);

  return (
    <>
      <label>Bad: {counterBad}</label>
      <button onClick={increaseBad}> Increase Bad</button>
    </>
  );
};

export default BadButton;
