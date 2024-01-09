import { useContext, useState } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";

const OpinionForm = () => {
  const [newOpinion, setNewOpinion] = useState("");
  const { create } = useContext(OpinionContext);

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    create(newOpinion);
    setNewOpinion("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={newOpinion}
        onChange={handleOnChange}
        placeholder="enter an opinion"
        required
      />
      <input type="submit" onClick={handleOnSubmit} value="Add Opinion" />
    </form>
  );
};

export default OpinionForm;
