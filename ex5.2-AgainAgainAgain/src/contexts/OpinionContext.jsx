import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [sortedOpinions, setSortedOpinions] = useState([]);

  const addOpinion = (opinionName) => {
    const newOpinion = {
      id: uuidv4(),
      name: opinionName,
      count: 1,
    };

    const copyOpinion = sortedOpinions.concat(newOpinion);
    copyOpinion.sort((a, b) => b.count - a.count);
    setSortedOpinions(copyOpinion);
  };

  const increaseVote = (id) => {
    const copyOpinion = [...sortedOpinions];
    const opinion = sortedOpinions.find((opinion) => opinion.id === id);
    if (!opinion) return undefined;

    opinion.count += 1;
    copyOpinion.sort((a, b) => b.count - a.count);
    setSortedOpinions(copyOpinion);
  };

  const exposedValue = {
    sortedOpinions,
    addOpinion,
    increaseVote,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
