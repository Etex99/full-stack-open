import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

const modify = (modifiedPerson) => {
    const request = axios.put(`${baseURL}/${modifiedPerson.id}`, modifiedPerson)
    return request.then(response => response.data)
}

export default { getAll, create, remove, modify }