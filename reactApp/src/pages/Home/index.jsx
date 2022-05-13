import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card } from "../../components/Card";

export function Home() {
  //Essa variável não reflete na interface é estático para isso existe os estados pois vamos precisar gerar uma renderização toda vez que a variável mudar 
  /*let studentName = '';
  
  function handleNameChange(name){
    studentName = name;
  }*/

  //==>Estado
  const [studentName, setStudentName] = useState('Ígara');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    };
    //prevState recupera os valores anteriores que já estavam na lista e coloca o novo
    //deve ter esses ... no prevState para os valores anteriores mesclar com o novo valor 
    setStudents(prevState => [...prevState, newStudent]);
  }

  /*useEffect(() => {
    console.log("useEffect foi chamado")
  }, [students]);
  //toda vez que o estado do students mudar o useEffect vai ser chamado

  useEffect(() => {
    fetch('https://api.github.com/users/igaraybc')
    .then(response => response.json())
    .then(data => {
        setUser({
          name: data.login,
          avatar: data.avatar_url
        })
    })  
  }) ooouuu utilizando async...*/

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/igaraybc');
      const data = await response.json();
      console.log("dados ===>", data);

      setUser({
        name: data.login,
        avatar: data.avatar_url
      })
    }

    fetchData();
  }, []);


  return (
    /*Uma expressão JXS tem que retornar somente um elemento
    então temos que embrulhar todo o html que estamos retornando 
    para se transformar num elemento só.
    Nesse caso utilizamos <section> mas poderia ser um fragment <></>*/
    <section className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar</button>

      {
        //Cartões dinâmicos
        //Para cada student estamos gerando um <Card> novo
        //Para cada Card novo temos que ter uma key nova e ÚNICA por issso temos a propriedade key
        students.map(student => (
          <Card key={student.time} name={student.name} time={student.time} />
        ))

      }
    </section>
  )
  /*<!--prop. strings: nome="Ígara"
      propriedades numéricas: idade={18}-->*/
}
