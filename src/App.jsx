/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos, todo])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map(todo =>
          (
            // eslint-disable-next-line react/jsx-key
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{todo}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default App
