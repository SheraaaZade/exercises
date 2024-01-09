import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";

const Opinion = ({ opinion }) => {
  const { increaseVote } = useContext(OpinionContext);
  return (
    <>
      <div>
        <span>
          {opinion.name} : {opinion.count}{" "}
        </span>
        <input
          type="submit"
          onClick={() => increaseVote(opinion.id)}
          value="Vote"
        />
      </div>
    </>
  );
};

export default Opinion;
