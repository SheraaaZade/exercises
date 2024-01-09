import "./App.css";
import { useQuery } from "@apollo/client";
import Persons from "./components/Persons/Persons";
import PersonForm from "./components/PersonForm/PersonForm";
import { ALL_PERSONS } from "./querries";
import Notify from "./components/Notify/Notify";
import { useState } from "react";
import PhoneForm from "./components/PhoneForm/PhoneForm";

/**
 * 
 */

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_PERSONS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  return (
    <>
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notify} />
      <PhoneForm setError={notify} />
    </>
  );
  // client.query({ query }).then((response) => {
  //   console.log(response.data);
  // });
};

export default App;
