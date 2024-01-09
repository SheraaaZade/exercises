import { useEffect } from "react";
import "../../App.css";
import Person from "../Person/Person";
import { useState } from "react";
import personService from "../services/persons";
import PersonForm from "../PersonForm/PersonForm";

 // POST permet d'ajouter, PUT de remplacer,
 // PATCH de modifier. N'utilisons pas PATCH pour l'instant.

 
function App() {
  const [persons, setNewPersons] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");

  useEffect(() => {
    personService.getAll().then((person) => {
      setNewPersons(person);
    });
  }, []);

  const addPerson = (newPerson) => { //appelé dans PersonForm
    if (selectedPerson) {
      personService
        .update(selectedPerson.id, newPerson)
        .then((updatedPerson) => {
          setNewPersons(
            persons.map((person) =>
              person.id === updatedPerson.id ? updatedPerson : person
            )
          );
          setSelectedPerson(null);
        });
    } else {
      personService
        .create(newPerson)
        .then((person) => {
          setNewPersons(persons.concat(person));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleEditClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCancelEdit = () => {
    setSelectedPerson(null);
  };

  return (
    <>
      <div>
        <h1>Phonebooks</h1>
        {persons.map((person) => (
          <div key={person.id}>
            <Person person={person} />
            <button onClick={() => handleEditClick(person)}>Edit</button>
          </div>
        ))}
      </div>

      <div>
        <h1>Register now</h1>
        <PersonForm
          onSubmit={addPerson}
          onCancelEdit={handleCancelEdit}
          selectedPerson={selectedPerson}
        />
      </div>
    </>
  );
}

export default App;
