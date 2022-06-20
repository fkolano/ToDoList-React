import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const ToDoList = () => {
    const [todoList, setToDoList] = useState([])
    return (
        <div className="container justify-content-center">
            <h1>todos</h1>
           
            <ul>
                <li><input placeholder="What needs to be done"></input></li>
                <li><input placeholder="What needs to be done"></input></li>
                <li><input placeholder="What needs to be done"></input></li>
                <li><input placeholder="What needs to be done"></input></li>
                <li><input placeholder="What needs to be done"></input></li>
            </ul>
        </div>
    )
    useEffect(
        () =>
         
          fetch("https://assets.breatheco.de/apis/fake/todos/user/fkolano")
            .then(r => r.json())
            .then(data => setToDoList(data)),
        [] 
      );
      return (
        <div>
          <input
            onKeyUp={e =>
              
              e.keyCode === 13 &&
              setToDoList(todoList.concat({ label: e.target.value, done: false }))
            }
          />
          <ul>
            {todoList === null
              ? "Loading..."
              : todoList.map(t => (
                  <li>
                    {t.label} ({t.done ? "done" : "not done"})
                  </li>
                ))}
          </ul>
        </div>
      );
    };
    
    ReactDOM.render(<ToDoList />, document.getElementById("app"));
    


