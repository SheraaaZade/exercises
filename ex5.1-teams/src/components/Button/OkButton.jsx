import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/ButtonContext";

const OkButton = () => {
  const { countOk, increaseOk } = useContext(ButtonContext);

  return (
    <>
      <span>Ok : {countOk}</span>
      <button type="submit" onClick={increaseOk} />
    </>
  );
};

export default OkButton;
