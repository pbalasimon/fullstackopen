import React, { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const DEFAULT_PERSON = { name: '', number: '' };
const DEFAULT_PERSONS = [
    { name: 'Arto Hellas', number: '000' },
    { name: 'John Doe', number: '111' },
    { name: 'Walter White', number: '222' },
    { name: 'Yoda He', number: '333' }
];

const App = () => {
    const [persons, setPersons] = useState(DEFAULT_PERSONS);
    const [personsShowed, setPersonsShowed] = useState([...persons]);
    const [person, setPerson] = useState(DEFAULT_PERSON);
    const [filter, setFilter] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const personExists = persons.some(p => {
            return p.name === person.name.trim();
        });
        if (personExists) {
            alert(`${person.name} is alreary added to phonebook`);
            return;
        }
        setPersons([...persons, person]);
        setPersonsShowed([...persons, person]);
        setPerson(DEFAULT_PERSON);
    }

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    }

    const handleFilter = (event) => {
        const filter = event.target.value;
        setFilter(filter);
        const personsFiltered = persons.filter(person => {
            return person.name.toLowerCase().includes(filter.toLowerCase())
        });
        setPersonsShowed(personsFiltered);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilter={handleFilter} filter={filter} />
            <h2>Add New Phone</h2>
            <PersonForm handleSubmit={handleSubmit} handleChange={handleChange} person={person} />
            <h2>Numbers</h2>
            <Persons persons={personsShowed} />
        </div>
    )
}

export default App