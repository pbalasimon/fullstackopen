import React from 'react'
import Note from './Note.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const getNotes = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const notes = response.data;
      console.log(notes);
      setNotes(notes);
      setLoading(false);
    }
    setLoading(true);
    setTimeout(() => getNotes(), 3000);
  }, []);

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