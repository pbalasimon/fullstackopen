import React from 'react'
import Note from './Note.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getNotes, addNote } from './services/notes/notes';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const notes = await getNotes();
      setNotes(notes);
      setLoading(false);
    }, 3000);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(newNote);
    const noteToAdd = {
      userId: 1,
      title: newNote,
      body: newNote,
    }
    try {
      const note = await addNote(noteToAdd);
      console.log(note);
      if (note) {
        setNotes([...notes, note]);
        setNewNote("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      { (loading) ? 'Cargando' : ''}
      <ul>
        {notes.map((note) => {
          return (
            <Note key={note.id} id={note.id} {...note} />
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