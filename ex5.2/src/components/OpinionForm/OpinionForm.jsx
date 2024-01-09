import { useContext, useState } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";

const OpinionForm = () => {
  const { create } = useContext(OpinionContext);
  const [newOpinion, setNewOpinion] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    create(newOpinion);
    setNewOpinion("");
  };

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={newOpinion}
        onChange={handleOnChange}
        required
      />
      <input type="submit" onClick={handleOnSubmit} value="Add Opinion"/>
    </form>
  );
};

export default OpinionForm;
