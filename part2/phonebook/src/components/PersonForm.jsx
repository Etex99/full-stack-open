const PersonForm = ({ newName, newNumber, handleNewNameChange, handleNewNumberChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <p>name: <input value={newName} onChange={handleNewNameChange} /></p>
                <p>number: <input value={newNumber} onChange={handleNewNumberChange} /></p>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm