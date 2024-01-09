import { useContext, useState } from "react";
import { Context as OpinionContext }  from "../../contexts/opinionContext";

const AddOpinions = () => {
  const [newOpinon, setNewOpinion] = useState("");

  const { createOpinion } = useContext(OpinionContext);

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    createOpinion(newOpinon);
    setNewOpinion("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        placeholder="enter your opinion here please ; )"
        value={newOpinon}
        onChange={handleOnChange}
        required
      />
      <input type="submit" value="Add Opinion" />
    </form>
  );
};

export default AddOpinions;
