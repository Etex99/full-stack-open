import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  /* persons */
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons').then(response => {
        setPersons(response.data)
      })
  }, [])
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