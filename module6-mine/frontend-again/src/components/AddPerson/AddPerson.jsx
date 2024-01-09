import { useState, useEffect, useContext } from "react";
import personService from "../../services/persons";
import { Context as PersonContext } from "../../services/Context";

const AddPerson = ({ selectedPerson, onPersonAdded }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const { phonebooks, setterPhonebooks } = useContext(PersonContext);
  const [selectedPerson, setSelectedPerson] = useState("");

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  useEffect(() => {
    if (selectedPerson) {
      setNewName(selectedPerson.name || "");
      setNewNumber(selectedPerson.number || "");
    }
  }, [selectedPerson]);

  const handleAddPerson = async (e) => {
    e.preventDefault();

    const personToUpdate = phonebooks.find((person) => person.id === selectedPerson?.id);

    if (personToUpdate) {
      const updatedPerson = { ...personToUpdate, name: newName, number: newNumber };

      try {
        const updatedPersonResponse = await personService.update(
          selectedPerson.id,
          updatedPerson
        );

        setterPhonebooks((persons) =>
          persons.map((person) =>
            person.id === updatedPersonResponse.id ? updatedPersonResponse : person
          )
        );

        setNewName("");
        setNewNumber("");
        onPersonAdded();
      } catch (err) {
        console.error("Error updating person: ", err);
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      try {
        const addedPerson = await personService.create(newPerson);
        setterPhonebooks((persons) => [...persons, addedPerson]);
        setNewName("");
        setNewNumber("");
        onPersonAdded();
      } catch (err) {
        console.error("Error adding person:", err);
      }
    }
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <form onSubmit={handleAddPerson}>
      <label>
        Name:
        <input type="text" value={newName} onChange={handleName} />
      </label>
      <label>
        Number:
        <input type="text" value={newNumber} onChange={handleNumber} />
      </label>
      <button type="submit">Add/Update Person</button>
    </form>
  );
};

export default AddPerson;
