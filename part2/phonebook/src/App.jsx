import { useState, useEffect } from 'react'
import personsService from "./services/persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  /* persons */
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  useEffect(() => {
    personsService.getAll()
      .then(result => setPersons(result))
      .catch(error => console.error(error))
  }, [])

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

  const onSubmitNewPerson = (event) => {
    event.preventDefault()
    let samePerson = persons.find(i => i.name.toLowerCase() === newName.toLowerCase())
    if (samePerson !== undefined) {
      if (confirm(`${newName} has already been added to the phonebook. Replace the old number with the new one?`)) {
        const modifiedPerson = {...samePerson, number: newNumber}
        personsService.modify(modifiedPerson).then(result => {
          setPersons(persons.map(i => i.id === result.id ? result : i))
        })
      }
    } else {
      const newPerson = { name: newName, number: newNumber }
      personsService.create(newPerson).then(result => {
      setPersons(persons.concat(result))
    })
    }
    setNewName("")
    setNewNumber("")
  }

  /* search filter */
  const onSearchFilterChange = (event) => setSearchFilter(event.target.value)
  const personsToShow = persons.filter(i => i.name.toLowerCase().includes(searchFilter))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchFilter={searchFilter} onSearchFilterChange={onSearchFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        onChangeNewName={(event) => setNewName(event.target.value)} 
        onChangeNewNumber={(event) => setNewNumber(event.target.value)} 
        onSubmitNewPerson={onSubmitNewPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App