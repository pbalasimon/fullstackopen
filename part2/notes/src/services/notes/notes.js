import axios from 'axios';
const getNotes = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const notes = response.data;
    console.log(notes);
    return notes;
}

const addNote = async (note) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', note);
    const resultNote = response.data;
    console.log(resultNote);
    return resultNote;
}

export { getNotes, addNote }