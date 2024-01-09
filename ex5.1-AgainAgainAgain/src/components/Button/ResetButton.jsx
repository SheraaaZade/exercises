import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";

const ResetButton = () => {
  const { resetAll } = useContext(ButtonContext);

  return (
    <div>
      <button onClick={resetAll}>Reset all</button>
    </div>
  );
};

export default ResetButton;
