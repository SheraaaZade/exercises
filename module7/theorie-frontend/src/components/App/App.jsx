import { useEffect, useState } from "react";
import "../../App.css";
import Person from "../Person/Person";
import AddPerson from "../PhonebookForm/PhonebookForm";
import personService from "../services/persons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/**
 * npm install react-router-dom
  importer dans main.jsx browserRouter:
  import { BrowserRouter as Router } from "react-router-dom";
 * 
 * 
 */

function App() {
  const [phonebook, setPhonebook] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const padding = {
    padding: 5,
  };

  useEffect(() => {
    const getAll = async () => {
      //function qui fait appelle à getAll dans persons.js du service
      try {
        const persons = await personService.getAll();
        setPhonebook(persons);
        //       persons.map((person) =>(person.id === '658c85996c212e8c3cd99b70'? console.log(person) : undefined))
      } catch (error) {
        console.error("Error fetching persons:", error);
      }
    };

    getAll();
  }, []);

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

        setPhonebook((persons) =>
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
        setPhonebook((persons) => [...persons, addPerson]);
        setNewName("");
        setNewNumber("");
      } catch (err) {
        console.error("Error adding person:", err);
      }
    }
  };

  const handleDeletePerson = async (person) => {
    try {
      await personService.remove(person.id); //person si il y avait pas d'id
      const updatePhonebook = await personService.getAll();
      setPhonebook(updatePhonebook);
    } catch (error) {
      console.error("Error deleting person", error);
    }
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };
  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  const handlers = {
    handleName,
    handleNumber,
    handleAddPerson,
  };

  return (
    <>
      <Router>
        <div>
          <Link style={padding} to="/">
            home
          </Link>
          <Link style={padding} to="/addPerson">
            users
          </Link>
        </div>

        <Routes>
          <Route path="/addPerson" element={<AddPerson />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <div>
          <i>Phonebook app by Shera</i>
        </div>
      </Router>

      <h1>Phonebook</h1>
      <div>
        {phonebook.map((person, index) => (
          <Person
            key={index}
            person={person}
            handleDeletePerson={handleDeletePerson}
            handleSelectPerson={handleSelectPerson}
          />
        ))}
      </div>
      <h2>Add a person</h2>
      <div>
        <AddPerson
          {...handlers}
          newName={newName}
          newNumber={newNumber}
          selectedPerson={selectedPerson}
        />
      </div>
    </>
  );
}

export default App;
