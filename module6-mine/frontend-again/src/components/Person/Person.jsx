const Person = ({ person, handleDeletePerson, handleSelectPerson  }) => {
  return (
    <div>
      {person.name} {person.number}
      <button type="button" onClick={() => handleDeletePerson(person)}>
        Delete
      </button>
      <button type="button" onClick={() => handleSelectPerson (person)}>
        Select
      </button>
    </div>
  );
};

export default Person;
