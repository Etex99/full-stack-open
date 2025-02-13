import { useState, useEffect } from 'react'
import personsService from "./services/persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  /* persons */
  const [persons, setPersons] = useState([])
  useEffect(() => {
    personsService.getAll()
      .then(result => setPersons(result))
      .catch(error => console.error(error))
  }, [])
  const addNewPerson = (name, number) => {
    if (persons.some(i => i.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} has already been added to the phonebook.`)
      return
    }
    const newPerson = { name, number }
    personsService.create(newPerson).then(result => {
      setPersons(persons.concat(result))
    })
  }
  const handleRemovePerson = (personToRemove) => {
    if (!confirm(`Delete ${personToRemove.name}?`)) {
      return
    }
    personsService.remove(personToRemove.id)
      .then(response => {
        setPersons(persons.filter(i => i.id !== personToRemove.id))
      })
      .catch(error => console.error(error))
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

      <Persons persons={personsToShow} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App