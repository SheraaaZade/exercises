import { useContext } from "react";
import { Context as OpinionWrapper } from "../../contexts/OpinionContext";

const Opinion = ({opinion}) => {
  const { increaseOpinion } = useContext(OpinionWrapper);
  return (
    <div>
      <span>{`${opinion.text} : ${opinion.score}`}</span>
      <button type="submit" onClick={() => increaseOpinion(opinion.id)}>
        Vote
      </button>
    </div>
  );
};

export default Opinion;
