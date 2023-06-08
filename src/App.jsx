/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const updateTodos = () => {
    setTodos([...todos, { id: Date.now(), text: todo, status: false }])
    setTodo('')
  }

  const handleCheckbox = (e, todoObj) => {
    setTodos(todos.filter(obj => {
      if (obj.id === todoObj.id) {
        todoObj.status = e.target.checked
      }
      return obj
    }))
  }

  const deleteTodos = (todoObj) => {
    setTodos(todos.filter(todo => todo.id != todoObj.id))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's WONDERFUL day 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={updateTodos} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map(todoObj => {
            if (todoObj.status === false) {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="todo">
                  <div className="left">
                    <input onChange={(e) => handleCheckbox(e, todoObj)}
                      checked={todoObj.status} type="checkbox" name="" id="" />
                    <p>{todoObj.text}</p>
                  </div>
                  <div className="right">
                    <i onClick={() => deleteTodos(todoObj)} className="fas fa-times"></i>
                  </div>
                </div>
              )
            }
          })
        }

      </div>
      <div className='mt-2'><h2>Finished Tasks</h2></div>
      <div className="todos">

        {
          todos.map(todoObj => {
            if (todoObj.status) {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="todo">
                  <div className="left lineThrough">
                    <input onChange={(e) => handleCheckbox(e, todoObj)}
                      checked={todoObj.status} type="checkbox" name="" id="" />
                    <p>{todoObj.text}</p>
                  </div>
                  <div className="right">
                    <i onClick={() => deleteTodos(todoObj)} className="fas fa-times"></i>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default App
