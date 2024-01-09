import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";

const OkButton = () => {
  const {increaseOk, countOk} = useContext(ButtonContext);

  return (
    <div>
      <label>Ok </label>
      <button onClick={increaseOk}> Ok {countOk}</button>
    </div>
  );
};

export default OkButton;
