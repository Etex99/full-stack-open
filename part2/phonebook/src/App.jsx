import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  /* persons */
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const addNewPerson = (name, number) => {
    if (persons.some(i => i.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} has already been added to the phonebook.`)
      return
    }

    let newPersons = [...persons]
    newPersons = newPersons.concat({ name: name, number: number, id: persons.length + 1 })
    setPersons(newPersons)
    console.log(newPersons);
  }

  /* new person form */
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const onNewPersonSubmit = (event) => {
    event.preventDefault()
    addNewPerson(newName, newNumber)
    setNewName("")
    setNewNumber("")
  }


  /* search filter */
  const [searchFilter, setSearchFilter] = useState("")
  const handleSearchFilterChange = (event) => setSearchFilter(event.target.value)
  const personsToShow = persons.filter(i => i.name.toLowerCase().includes(searchFilter))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchFilter={searchFilter} handleSearchFilterChange={handleSearchFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNewNameChange={(event) => setNewName(event.target.value)} 
        handleNewNumberChange={(event) => setNewNumber(event.target.value)} 
        onSubmit={onNewPersonSubmit}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} />
    </div>
  )
}

export default App