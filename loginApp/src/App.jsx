import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import {Card} from './components/card'
import { Form } from './components/form'

function App() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8080/auth"

  function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(e => console.log(e))
  }

  

  function addUser(newUser){
    axios.post("http://localhost:8080/auth/registro", newUser)
    .then(res => {
      return console.log(res)
    })
    .catch(error => {
      console.log(error.response.data.error)
    })
  }

  useEffect(() => {
    return getUsers()
  })

  return (
    <div className="App">
      <Card users={users}/>
      <Form onAddUser={addUser}/>
    </div>
  )

}

export default App
