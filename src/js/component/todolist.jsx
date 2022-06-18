import React, { useState} from 'react';

export const ToDoList = () => {
    const [todoList, setToDoList] = useState([])
    return (
        <div className="container justify-content-center">
            <h1>todos</h1>
            <input placeholder="What needs to be done"></input>
        </div>
    )


}