import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([

    {
      "id": 1,
      "text": "Find your polling location",
      "other": "no-show",
      "day": "Monday",
      "reminder": true
    },
    {
      "text": "Check your registration",
      "day": "Tuesday",
      "reminder": true,
      "id": 3
    },
    {
      "text": "Vote early or by mail",
      "day": "Wednesday",
      "reminder": true,
      "id": 4
    },
    {
      "text": "Check voter ID requirements",
      "day": "Thursday",
      "reminder": true,
      "id": 3
    },
    {
      "text": "Know your voting rights",
      "day": "Friday",
      "reminder": true,
      "id": 4
    }
  ])

  //add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to display"}
    </div>
  );
}

export default App;
