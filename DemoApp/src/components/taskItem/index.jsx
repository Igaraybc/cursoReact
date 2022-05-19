import { useState } from "react"
import "./style.css"


export function TaskItem({ id, title, state, onTaskUpdate, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editableTitle, setEditableTitle] = useState(title)

    function onTitleChange(event) {
        const newTitle = event.target.value;
        setEditableTitle(newTitle)
    }

    function onStateChange(event){
        const newState = event.target.value;
        console.log(newState)
        onTaskUpdate(id, editableTitle, newState)
    }

    function onKeyPress(event) {
        if (event.key == "Enter") {
            setIsEditing(false)
            if(editableTitle.length == 0){
                onDeleteTask(id)
            }
        }
        onTaskUpdate(id, editableTitle, state)
    }

    if (isEditing) {
        return <input type="text" value={editableTitle} onChange={(e) => onTitleChange(e)} onKeyPress={onKeyPress}
        />;
    }
    else {
        return (<div className="task">
            <div onClick={() => setIsEditing(true)}>{editableTitle}</div>
            <select onChange={onStateChange} value={state}>
                <option value="pendente">Pendente</option>
                <option value="fazendo">Fazendo</option>
                <option value="completo">Completo</option>
            </select>
            </div>)
    }

}