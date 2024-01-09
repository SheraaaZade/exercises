import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [countGood, setCountGood] = useState(0);
  const [countOk, setCountOk] = useState(0);
  const [countBad, setCountBad] = useState(0);

  const increaseBad = () => setCountBad(countBad + 1);
  const increaseOk = () => setCountOk(countOk + 1);
  const increaseGood = () => setCountGood(countGood + 1);
  
  const resetAll = () => {
    setCountBad(0);
    setCountGood(0);
    setCountOk(0);
  };

  const exposedValue = {
    increaseBad,
    increaseGood,
    increaseOk,
    countBad,
    countGood,
    countOk,
    resetAll
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
