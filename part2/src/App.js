import React from 'react'
import Note from './Note.js';
import { useState } from 'react';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newNote);
    const noteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAdd);
    setNotes([...notes, noteToAdd]);
    setNewNote("");
  }

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          return (
            <Note key={note.id} id={note.id} content={note.content} date={note.date} />
          );
        })}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newNote} />
          <button>Crear nota</button>
        </form>
      </div>
    </div>
  )
}

export default App;