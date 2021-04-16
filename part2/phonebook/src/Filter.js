const Filter = ({ handleFilter, filter }) => {
    return (
        <div>
            Filter shown with: <input type="text" name="filter" onChange={handleFilter} value={filter} />
        </div>
    );
}

export default Filter;