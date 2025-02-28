import { useState, useEffect } from 'react'
import personsService from "./services/persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from './components/Notification'

const App = () => {
  /* persons */
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personsService.getAll()
      .then(result => setPersons(result))
      .catch(error => {
        setNotification({ message:"Could not fetch phonebook entries, please try again", type:"error" })
        console.log(error)
      })
  }, [])

  const handleRemovePerson = (personToRemove) => {
    if (confirm(`Delete ${personToRemove.name}?`)) {
      personsService.remove(personToRemove.id)
        .then(response => {
          setPersons(persons.filter(i => i.id !== personToRemove.id))
          notify(`${personToRemove.name} has been removed.`, "successful-action", 5000)
        })
        .catch(error => {
          notify(`${personToRemove.name} has already been removed.`, "error", 5000)
          console.log(error)
        })
    }
  }

  const onSubmitNewPerson = (event) => {
    event.preventDefault()
    let samePerson = persons.find(i => i.name.toLowerCase() === newName.toLowerCase())
    if (samePerson !== undefined) {
      if (confirm(`${newName} has already been added to the phonebook. Replace the old number with the new one?`)) {
        const modifiedPerson = {id: samePerson.id, name: newName, number: newNumber}
        personsService.modify(modifiedPerson)
          .then(result => {
            setPersons(persons.map(i => i.id === result.id ? result : i))
            notify(`Number of ${modifiedPerson.name} has been modified`, "successful-action", 5000)
          })
          .catch(error => {
            console.log(error)
            if (error instanceof TypeError) {
              setPersons(persons.filter(i => i.id !== modifiedPerson.id))
              notify(`${modifiedPerson.name} cannot be modified as it does not exist`, "error", 5000)
            } else if (error.status === 400) {
              notify(`${modifiedPerson.name} cannot be modified because the number is invalid.`, "error", 5000)
            }
          })
      }
    } else {
      const newPerson = { name: newName, number: newNumber }
      personsService.create(newPerson)
        .then(result => {
          setPersons(persons.concat(result))
          notify(`${newName} has been added to the phonebook`, "successful-action", 5000)
        })
        .catch(error => {
          console.log(error);
          notify("Cannot add entry to phonebook. Name or number is invalid.", "error", 5000)
        })
    }
    setNewName("")
    setNewNumber("")
  }

  /* search filter */
  const onSearchFilterChange = (event) => setSearchFilter(event.target.value)
  const personsToShow = persons.filter(i => i.name.toLowerCase().includes(searchFilter))

  /* helpers */
  const notify = (message, type, timeout) => {
    setNotification({message, type})
    setTimeout(() => setNotification(null), timeout)
  }

  return (
    <div>
      <Notification notification={notification}/>

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