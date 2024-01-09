import { useState } from "react";
                    //c'est la fonction qui est reçue ici
const AddPerson = ({ createPerson }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };


  const handleAddPerson = (event) => {
    event.preventDefault();
    createPerson({ name: newName, number: newNumber });
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>

      <div>
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>

    </form>
  );
};

export default AddPerson;
