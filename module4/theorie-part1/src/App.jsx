import Note from "./components/Note/Notes";

import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "This is a note", user: "John" , important: false},
    { id: 2, content: "Another note", user: "Jane" , important: false},
    { id: 3, content: "Another SHERA", user: "Shera" , important: true},
    { id: 4, content: "Another M", user: "M", important: true },
    { id: 5, content: "Another AYA", user: "AYA", important: true },
  ]);

  const [newNote, setNewNote] = useState(" a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: false,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
