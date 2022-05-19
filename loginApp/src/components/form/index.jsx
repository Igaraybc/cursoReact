import { useState } from 'react'
import './style.css'

export function Form({onAddUser}){

    const [user, setUser] = useState({
        nome: "Nome",
        email: "",
        cpf: "",
        senha: "Qualquer"
    })


    return(<div className='form'>
        <input type="text" placeholder='Nome' onChange={(e) => console.log(e.target.value)}/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='CPF'/>
        <button onClick={() => onAddUser()}>Adicionar</button>
    </div>)
}