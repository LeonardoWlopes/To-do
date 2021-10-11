import React, { useState } from 'react'

import './App.css'
import AddTask from './components/AddTask'

import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Aprender React',
      completed: false
    },
    {
      id: '2',
      title: 'Sei la',
      completed: true
    }
  ])

  const handleTaskClick = (taskId) =>{
    const newTaks = tasks.map( task => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task
    })
    setTasks(newTaks)
  }
  
  const handleTaskAddition = (taskTitle) => {
      const newTasks = [
      ... tasks,
      {
        id: Math.random(10),
        title: taskTitle,
        completed: false
      }
    ]
    setTasks(newTasks)
  }

  return(
    <>
    <div className='container'>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
    </div>
    </>
  )
}
export default App