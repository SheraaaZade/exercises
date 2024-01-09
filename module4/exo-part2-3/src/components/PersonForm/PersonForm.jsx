import { useEffect } from "react";
import { useState } from "react";

const PersonForm = ({ onSubmit, onCancelEdit, selectedPerson }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    if (selectedPerson) {
      setNewName(selectedPerson.name);
      setNewNumber(selectedPerson.number);
    } else {
      setNewName("");
      setNewNumber("");
    }
  }, [selectedPerson]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    onSubmit(newPerson);
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name </label>
        <input value={newName} type="text" onChange={(e) => setNewName(e.target.value)} />
      </div>

      <div>
        <label>Phone number </label>

        <input value={newNumber} type="number" onChange={(e) => setNewNumber(e.target.value)} />
      </div>

      {selectedPerson && (
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
      <button type="submit">save</button>
    </form>
  );
};

export default PersonForm;