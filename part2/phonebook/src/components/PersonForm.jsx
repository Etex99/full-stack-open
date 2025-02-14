const PersonForm = ({ newName, newNumber, onChangeNewName, onChangeNewNumber, onSubmitNewPerson }) => {
    return (
        <form onSubmit={onSubmitNewPerson}>
            <div>
                <p>name: <input value={newName} onChange={onChangeNewName} /></p>
                <p>number: <input value={newNumber} onChange={onChangeNewNumber} /></p>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm