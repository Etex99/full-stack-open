const Person = ({name, number}) => {
    return (
        <li>
            <p>{name} {number}</p>
        </li>
    )
}

const Persons = ({persons}) => {
    return (
        <ul>
            {persons.map(i => <Person key={i.id} name={i.name} number={i.number}/>)}
        </ul>
    )
}

export default Persons