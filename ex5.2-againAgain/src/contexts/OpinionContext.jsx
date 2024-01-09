import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [sortedOpinions, setSortedOpinions] = useState([]);

  const increaseOpinion = (idOpinion) => {
    const copySortedOpinions = [...sortedOpinions];

    const updateOpinion = copySortedOpinions.find(
      (opinion) => opinion.id === idOpinion
    );
    
    if (!updateOpinion) return undefined;

    updateOpinion.score += 1;
    copySortedOpinions.sort((a, b) => b.score - a.score);
    setSortedOpinions(copySortedOpinions);
  };

  const create = (opinion) => {
    const newOpinion = {
      id: uuidv4(),
      text: opinion,
      score: 1,
    };
    const copySortedOpinions = sortedOpinions.concat(newOpinion);
    copySortedOpinions.sort((a, b) => b.score - a.score);
    setSortedOpinions(copySortedOpinions);
  };

  const exposedValue = {
    create,
    increaseOpinion,
    sortedOpinions,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
