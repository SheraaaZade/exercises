// import axios from "axios";
// import { useState } from "react";

// const AddNote = ({ createNote }) => {
//   const [newNote, setNewNote] = useState("");

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//     };

//     axios.post("http://localhost:3001/notes", noteObject).then((response) => {
//       createNote(response.data);
//       setNewNote("");
//     });
//   };

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// };

// export default AddNote;
