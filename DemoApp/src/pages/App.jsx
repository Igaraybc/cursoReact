import { NavBar } from "../components/navbar"
import { Card } from "../components/card"
import './styles.css'
import { useState } from "react"

let idAdd = 0
const gerarId = () =>{
    idAdd += 1
    return idAdd 
}

export function App() {

    const [tasks, setTasks] = useState([])
 
    
    function addTask(title, state){
        const newTask = {
            id: gerarId(), 
            title, 
            state
        }
        setTasks(prevState => [...prevState, newTask])
    }

    function updateTask(id, title, state){
        setTasks((prevTasks) => {
            return prevTasks.map((task) =>{
                if(task.id == id){
                    return {...task, title, state}
                }
                else{
                    return task
                }
            })
        })
    }

    function deleteTask(id){
        setTasks(prevTasks => 
            prevTasks.filter(task => task.id !== id)
        )
    }
    
    return (
        <div>
            <NavBar />
            <div className="container">
                <Card title="Pendente" taskState="pendente" tasks={tasks.filter(t => t.state.toLowerCase() === "pendente")} onAddTask={addTask} onTaskUpdate={updateTask} onDeleteTask={deleteTask}/>
                <Card title="Fazendo" taskState="fazendo" tasks={tasks.filter(t => t.state.toLowerCase() === "fazendo")} onAddTask={addTask} onTaskUpdate={updateTask} onDeleteTask={deleteTask}/>
                <Card title="Completo" taskState="completo" tasks={tasks.filter(t => t.state.toLowerCase() === "completo")} onAddTask={addTask} onTaskUpdate={updateTask} onDeleteTask={deleteTask}/>
            </div>
        </div>
    )
}