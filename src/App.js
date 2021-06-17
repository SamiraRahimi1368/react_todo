import React, { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Read book', done: true },
    { id: 2, title: 'Write letter', done: false },
    { id: 3, title: 'Edit cover', done: false },
  ])
  const [task, setTask] = useState('')

  const onChangeInput = (e) => {
    const value = e.target.value
    setTask(value)
  }

  const onSubmitTodo = () => {
    let newTask = {
      id: new Date().getTime().toString(),
      title: task,
      done: true,
    }
    setTasks([...tasks, newTask])
  }

  const onChangeBox = (item) => {
    const myTasks = tasks.map((el) =>
      el.id === item.id ? { ...el, done: !el.done } : el
    )
    setTasks(myTasks)
  }

  const handleDel = (item) => {
    const newTasks = tasks.filter((el) => el.id !== item.id)
    setTasks(newTasks)
  }

  return (
    <>
      <h2>ToDo List:</h2>

      <input type='text' value={task} onChange={onChangeInput} />

      <button onClick={onSubmitTodo}>Submit</button>

      <ul style={{ marginLeft: '20px' }}>
        {tasks.map((item) => (
          <li
            key={item.id}
            style={{ textDecoration: item.done ? 'line-through' : null }}
          >
            <input
              type='checkbox'
              onClick={() => onChangeBox(item)}
              defaultChecked={item.done}
            />
            {item.title}
            <button type='button' onClick={() => handleDel(item)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
