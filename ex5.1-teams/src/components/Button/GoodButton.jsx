import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/ButtonContext";

const GoodButton = () => {
  const { countGood, increaseGood } = useContext(ButtonContext);

  return (
    <>
      <span>Good : {countGood}</span>
      <button type="submit" onClick={increaseGood} />
    </>
  );
};

export default GoodButton;
