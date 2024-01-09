import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/opinionContext";
import Opinion from "./Opinion";

const ListOpinions = () => {
  const { sortedOpinions } = useContext(OpinionContext);

  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{ opinion }} /> //version spread opérateur
    //            sinon j'aurai fait text={opinion.text} score={opinion.score}
  ));
};

export default ListOpinions;
