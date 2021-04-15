import React, { useState } from 'react'

const DEFAULT_PERSON = { name: '', number: '' };

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '000' },
        { name: 'John Doe', number: '111' },
        { name: 'Walter White', number: '222' },
        { name: 'Yoda', number: '333' }
    ]);
    const [person, setPerson] = useState(DEFAULT_PERSON);
    const [filter, setFilter] = useState('');

    const handleSubtmit = (event) => {
        event.preventDefault();
        const personExists = persons.some(p => {
            return p.name === person.name.trim();
        });
        if (personExists) {
            alert(`${person.name} is alreary added to phonebook`);
            return;
        }
        setPersons([...persons, person]);
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
        setPersons(personsFiltered);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with: <input type="text" name="filter" onChange={handleFilter} value={filter} />
            </div>
            <h2>Add New Phone</h2>
            <form onSubmit={handleSubtmit}>
                <div>
                    Name: <input type="text" name="name" onChange={handleChange} value={person.name} />
                </div>
                <div>
                    Number: <input type="text" name="number" onChange={handleChange} value={person.number} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => {
                return (<div key={person.name}> {person.name + ': ' + person.number}</div>)
            })}
        </div>
    )
}

export default App