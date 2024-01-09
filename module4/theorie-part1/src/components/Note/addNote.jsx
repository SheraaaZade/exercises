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

export default addNote;
