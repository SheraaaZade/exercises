import React from "react";
import { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [counterGood, setCounterGood] = useState(0);
  const [counterBad, setCounterBad] = useState(0);
  const [counterOk, setCounterOk] = useState(0);

  const increaseGood = () => setCounterGood(counterGood + 1);
  const increaseOk = () => setCounterOk(counterOk + 1);
  const increaseBad = () => setCounterBad(counterBad + 1);
  const resetAll = () => {
    setCounterBad(0);
    setCounterGood(0);
    setCounterOk(0);
  };

  const exposedValue = {
    counterBad,
    counterGood,
    counterOk,
    increaseBad,
    increaseGood,
    increaseOk,
    resetAll,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
