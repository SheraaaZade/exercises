import { useState } from "react";
import "../../index.css";
import Person from "../Person/Person";
import PersonsAPI from "../../services/persons";
import { useEffect } from "react";
import AddPerson from "../addPerson/addPerson";

const App = () => { // executer le backend npm run server pour le backend!!
  const [persons, setPersons] = useState([]);

  const initialLoad = () => {
    PersonsAPI.getAll()
      .then((persons) => setPersons(persons))
      .catch((error) => console.warn(error));
  };

  useEffect(initialLoad, []); //useEffect appelle à initialLoad, et cela une seule fois grâce au []

  const createPerson = (person) => {
    const nameExists = persons.some((p) => p.name === person.name);

    if (nameExists) {
      alert(`This name ${person.name} already exists in database`);
      return;
    }

    PersonsAPI.create(person).then((createPerson) =>
      setPersons([...persons, createPerson])
    );
  };
  //c'est la fonction createPerson qui est envoyé via AddPerson
  return (
    <div>
      <h2>Add a person</h2>
      <AddPerson createPerson={createPerson} /> 
      <h2>Phoneboook</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
