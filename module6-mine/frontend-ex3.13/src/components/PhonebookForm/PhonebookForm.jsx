const AddPerson = ({
  handleAddPerson,
  newName,
  handleName,
  newNumber,
  handleNumber,
  selectedPerson,
}) => {
  const nameValue = selectedPerson ? selectedPerson.name : newName;
  
  return (
    <div>
      <form onSubmit={handleAddPerson}>
        <input
          value={nameValue}
          onChange={handleName}
          type="text"
          placeholder="Enter name"
        />
        <input
          value={newNumber}
          type="number"
          placeholder="Enter number"
          onChange={handleNumber}
        />
        <button type="submit">{selectedPerson ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default AddPerson;
