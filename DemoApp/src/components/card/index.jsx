import './styles.css'
import {useState} from 'react';
import { TaskItem } from '../taskItem';

export function Card({title, tasks,  onAddTask, onTaskUpdate, onDeleteTask,taskState}){

    return (
        <section className="card">
            <p className='title mb-1'>{title}</p>
                <button onClick={() => onAddTask("Nova Tarefa", taskState)}>Adicionar</button>
            {tasks.map(task =>              
                <TaskItem 
                title={task.title}
                id={task.id}
                state={task.state}
                key={task.id}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
                 />
            )}
            { tasks.length === 0 && <div>Lista Vazia</div>}
        </section>
            //Renderização condicional
    )
} 