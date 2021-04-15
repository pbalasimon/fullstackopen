import React, { useState } from 'react'

const DEFAULT_PERSON = { name: '', number: '' };

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '000' }
    ]);
    const [person, setPerson] = useState(DEFAULT_PERSON);

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

    return (
        <div>
            <h2>Phonebook</h2>
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