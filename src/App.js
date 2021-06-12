import React, { useState } from 'react'

const App = () => {
  const [NewTaskText, setNewTaskText] = useState('')
  const [Tasks, setTasks] = useState(['do a task', 'samira'])

  const addTask = (e) => {
    e.preventDefault()
    if (!NewTaskText) return
    setTasks((currentTasks) => {
      return [...currentTasks, NewTaskText]
    })
    setNewTaskText('')
  }
  const onchangeInput = (e) => {
    const value = e.target.value
    setNewTaskText(value)
  }

  return (
    <div className='row'>
      <form onSubmit={addTask}>
        <div className='row col s6'>
          <div className='input-field col s10'>
            <textarea
              id='textarea1'
              className='materialize-textarea'
              value={NewTaskText}
              onChange={onchangeInput}
            ></textarea>

            <label htmlFor='textarea1'>What needs to be done ?</label>
          </div>
        </div>
        <div className='row col s6'>
          <br></br>
          <button className='waves-effect waves-light btn' type="submit">
            <i className='material-icons left'>
              add_circle
            </i>
            Add
          </button>
        </div>
      </form>

      <div className='row'>
        <div className='row col s9'>
          <ul className='collection with-header'>
            <li className='collection-header'>
              <h4>Todo List</h4>

              <form>
                <div className='input-field'>
                  <input id='search' type='search' required />
                  <label className='label-icon' htmlFor='search'>
                    <i className='material-icons'>search</i>Search
                  </label>
                  <i className='material-icons'>close</i>
                </div>
              </form>
            </li>
            <label>
              {Tasks.map((item, i) => {
                return (
                  <li className="collection-item" key = {i}>
                    <input type="checkbox" />
                    <span>{item}</span>

                    <span>
                    <a href="#!" className="secondary-content">
                    <i className="material-icons">delete</i>
                    <i className="material-icons">check_circle</i>
                  </a>
                </span>
              </li>
                )
              })}
            </label>
           
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App








