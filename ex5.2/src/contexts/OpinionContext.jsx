import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [sortedOpinions, setSortedOpinions] = useState([]);

  const create = (opinion) => {
    const newSortedOpinions = sortedOpinions.concat({
      id: uuidv4(),
      text: opinion,
      score: 1,
    });

    newSortedOpinions.sort((a,b) => b.score - a.score)
    setSortedOpinions(newSortedOpinions);
  };

  const increaseOpinion = (opinionId) => {
    const newSortedOpinion = [...sortedOpinions];

    const updateOpinion = newSortedOpinion.find(
      (opinion) => opinion.id === opinionId
    );
    if (!updateOpinion) return undefined;

    updateOpinion.score += 1;
    newSortedOpinion.sort((a, b) => b.score - a.score);
    setSortedOpinions(newSortedOpinion);
  };

  const exposedValue = {
    sortedOpinions,
    create,
    increaseOpinion,
  };

  return <Context.Provider value={exposedValue}> {children} </Context.Provider>;
};

export { Context, ProviderWrapper };
