import { useContext, useState } from "react";
import "../../App.css";
import AddPerson from "../AddPerson/AddPerson";
import PersonList from "../Person/PersonList";
import { Context as PersonContext } from "../../services/Context";
import personService from "../../services/persons";

function App() {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const { phonebooks, setterPhonebooks } = useContext(PersonContext);

  const handleAddPerson = async (event) => {
    event.preventDefault();

    if (selectedPerson) {
      const updatedPerson = {
        ...selectedPerson,
        name: newName,
        number: newNumber,
      };
      try {
        const updatedPersonResponse = await personService.update(
          selectedPerson.id,
          updatedPerson
        );

        setterPhonebooks((persons) =>
          persons.map((person) =>
            person.name === updatedPersonResponse.name
              ? updatedPersonResponse
              : person
          )
        );
        setNewNumber("");
        setSelectedPerson(null);
      } catch (err) {
        console.error("Error updating person: ", err);
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      try {
        const addPerson = await personService.create(newPerson);
        setterPhonebooks((persons) => [...persons, addPerson]);
        setNewName("");
        setNewNumber("");
      } catch (err) {
        console.error("Error adding person:", err);
      }
    }
  };
  return (
    <>
      <PersonList />
      <AddPerson />
    </>
  );
}

export default App;
