import React, { useState } from 'react';
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

  function handleAddStudent(){
      const newStudent = {
        name: studentName,
        time: new Date().toLocaleDateString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      };
      //prevState recupera os valores anteriores que já estavam na lista e coloca o novo
      //deve ter esses ... no prevState para os valores anteriores mesclar com o novo valor 
      setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    /*Uma expressão JXS tem que retornar somente um elemento
    então temos que embrulhar todo o html que estamos retornando 
    para se transformar num elemento só.
    Nesse caso utilizamos <section> mas poderia ser um fragment <></>*/
    <section className='container'>
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder="Digite o nome" 
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar</button>
      
      {
      //Cartões dinâmicos
      students.map(student => <Card name={student.name} time={student.time}/>)

      }
    </section>
  )
  /*<!--prop. strings: nome="Ígara"
      propriedades numéricas: idade={18}-->*/
}
