import { useContext } from "react";
import { Context as OpinionWrapper } from "../../contexts/OpinionContext";
import Opinion from "../OpinionList/Opinon";

const OpinionList = () => {
  const { sortedOpinions } = useContext(OpinionWrapper);
  return (
    <div>
      {sortedOpinions.map((opinion) => (
        <Opinion key={opinion.id} {...{ opinion }} />
      ))}
    </div>
  );
};

export default OpinionList;
