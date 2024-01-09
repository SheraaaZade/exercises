import { useContext, useState } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";

const OpinionForm = () => {
  const { addOpinion } = useContext(OpinionContext);
  const [newOpinion, setNewOpinion] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addOpinion(newOpinion);
    setNewOpinion("");
  };

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  return (
    <form>
      <input
        type="text"
        value={newOpinion}
        onChange={handleOnChange}
        placeholder="enter an opinion"
        required
      />
      <button type="submit" onClick={handleOnSubmit}>
        Add Opinion
      </button>
    </form>
  );
};

export default OpinionForm;
