const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

let notes = [
    {
        "id": 1,
        "content": "Lorem Ipsum",
        "date": "2021-01-01",
        "importante": true
    },
    {
        "id": 2,
        "content": "es el texto que se usa habitualmente ",
        "date": "2020-01-01",
        "importante": true
    },
    {
        "id": 3,
        "content": "en diseño gráfico en demostraciones ",
        "date": "2019-01-01",
        "importante": true
    },
    {
        "id": 4,
        "content": "de tipografías o de borradores",
        "date": "2018-01-01",
        "importante": true
    }
];

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (request, response) => {
    response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    const note = notes.find(note => note.id === id);
    if (note) {
        response.json(note);
    } else {
        response.status(404).end();
    }
});

app.post('/api/notes', (request, response) => {
    const ids = notes.map(note => note.id);
    const maxtId = Math.max(...ids);
    const { content, important } = request.body;
    const newNote = { id: maxtId + 1, content, date: new Date().toISOString(), important };
    notes = [...notes, newNote];
    response.status(201).json(newNote);
});

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    notes = notes.filter(note => note.id !== id);
    response.status(204).end();
});

app.listen(3001, (request, response) => {
    console.log('Server running on port 3001');
});