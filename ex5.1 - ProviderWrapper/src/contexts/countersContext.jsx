import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [goodCounter, setGoodCounter] = useState(0);
  const [okCounter, setOkCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  const increaseGood = () => setGoodCounter(goodCounter + 1);
  const increaseOk = () => setOkCounter(okCounter + 1);
  const increaseBad = () => setBadCounter(badCounter + 1);

  
  const resetAll = () => {
    setBadCounter(0);
    setOkCounter(0);
    setGoodCounter(0);
  };

  const exposedValue = {
    goodCounter,
    okCounter,
    badCounter,
    increaseBad,
    increaseGood,
    increaseOk,
    resetAll,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper};
