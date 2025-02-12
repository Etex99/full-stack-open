const Filter = ({ searchFilter, handleSearchFilterChange }) => {
    return (
        <div>
            <p>filter shown with: <input value={searchFilter} onChange={handleSearchFilterChange} /></p>
        </div>
    )
}

export default Filter