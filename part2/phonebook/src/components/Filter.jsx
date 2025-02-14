const Filter = ({ searchFilter, onSearchFilterChange }) => {
    return (
        <div>
            <p>filter shown with: <input value={searchFilter} onChange={onSearchFilterChange} /></p>
        </div>
    )
}

export default Filter