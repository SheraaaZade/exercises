import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/opinionContext";

const Opinion = ({opinion}) => {
  const { increaseOpinionScore } = useContext(OpinionContext);

  return (
    <div>
      <span>{`${opinion.text} : ${opinion.score}`}</span>
      <button onClick={() => increaseOpinionScore(opinion.id)}>Vote</button>
    </div>
  );
};

export default Opinion;
