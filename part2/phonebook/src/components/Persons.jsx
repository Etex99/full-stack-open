const Person = ({ name, number, handleRemove }) => {
    return (
        <li>
            <p>
                {name} {number} {" "} <button onClick={handleRemove}>remove</button>
            </p>
        </li>
    )
}

const Persons = ({ persons, handleRemovePerson }) => {
    return (
        <ul>
            {persons.map(i => <Person key={i.id} name={i.name} number={i.number} handleRemove={() => handleRemovePerson(i)}/>)}
        </ul>
    )
}

export default Persons