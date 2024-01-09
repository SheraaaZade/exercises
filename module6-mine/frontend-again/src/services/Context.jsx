import React, { useEffect, useState } from "react";
import personService from "./persons";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [phonebooks, setPhonebook] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const persons = await personService.getAll();
        setPhonebook(persons);
      } catch (err) {
        console.error("Error fetching getAll", err);
      }
    };
    getAll();
  }, []);

  const setterPhonebooks = (persons) => setPhonebook(persons);
  const getOne = async (id) => await personService.getOne(id);
  

  const exposedValue = {
    phonebooks,
    setterPhonebooks,
    getOne,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
