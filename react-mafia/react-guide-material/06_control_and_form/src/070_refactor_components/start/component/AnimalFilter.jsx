const AnimalFilter   = ({ filterState }) => {
    const [filterVal, setFilterVal] = filterState;
    return (
        <input
        type="type"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
    )
}

export default AnimalFilter;