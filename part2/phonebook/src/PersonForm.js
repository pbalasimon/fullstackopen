const PersonForm = ({ handleSubmit, handleChange, person }) => {
    return (
        <form onSubmit={handleSubmit}>
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
    );
}

export default PersonForm;