import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";
import Opinion from "./Opinion";

const OpinionList = () => {
  const { sortedOpinions } = useContext(OpinionContext);

  return (
    <div>
      {sortedOpinions.map((opinion) => (
        <Opinion key={opinion.id} {...{ opinion }} />
      ))}
    </div>
  );
};

export default OpinionList;
