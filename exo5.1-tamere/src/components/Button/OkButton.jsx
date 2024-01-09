import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/ButtonsContext";

const OkButton = () => {
  const { counterOk, increaseOk } = useContext(ButtonContext);

  return (
    <>
      <label>Ok: {counterOk}</label>
      <button onClick={increaseOk}> Increase Ok</button>
    </>
  );
};

export default OkButton;
