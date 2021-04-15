import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handleSubtmit = (event) => {
        event.preventDefault();
        setPersons([...persons, { name: newName }]);
        setNewName('');
    }

    const handleChange = (event) => {
        setNewName(event.target.value);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubtmit}>
                <div>
                    Name: <input type="text" name="newName" onChange={handleChange} value={newName} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => {
                return (<div key={person.name}> {person.name}</div>)
            })}
        </div>
    )
}

export default App