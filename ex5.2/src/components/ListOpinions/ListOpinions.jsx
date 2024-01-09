import { useContext } from "react";
import Opinion from "./Opinion";
import { Context as OpinionContext } from "../../contexts/OpinionContext";

const ListOpinions = () => {
  const { sortedOpinions } = useContext(OpinionContext);
  
  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{opinion}} />
  ));
};

export default ListOpinions;
