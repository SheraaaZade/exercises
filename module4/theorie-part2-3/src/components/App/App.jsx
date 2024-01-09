import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import Note from "../Note/Note";
import noteService from "../services/notes";

/**
 * npm install axios
 * npm install -g json-server
 * executer: json-server --port 3001 --watch db.json OU
 *  ou bien   npx json-server --port 3001 --watch db.json
 * npm install json-server --save-dev
 *  dans package.json -> scripts : "server": "json-server -p3001 --watch db.json"
 *
 *
 * ATTENTION: MAP bien mettre PARENTHESE => ( ) et pas => { } !!
 *
 * dans le component child le paramètre il doit etre {}
 */

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showall, setShowAll] = useState(true);

  const hook = () => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };
  //[] pour dire au useEffect de s'executer qu'une seule fois!
  useEffect(hook, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    })
    .catch(error => {
      console.log('Error when attempting to update the note' + id+ ' ' +error)
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <>
      <h1>Notes</h1>
      <div>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </div>
      <h2>Add a note</h2>
      <div>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
    </>
  );
}

export default App;
