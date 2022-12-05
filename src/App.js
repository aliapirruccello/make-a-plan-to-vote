import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ 
    {
    "id": 1,
    "text": "Find your polling location",
    "reminder": true,
    "link":"https://www.usa.gov/election-day#item-37327"
  },
  {
    "id": 2,
    "text": "Check your registration",
    "reminder": true,
    "link": "https://vote.gov/"
  },
  {
    "id": 3,
    "text": "Vote early or by mail",
    "reminder": true,
    "link": "https://www.nass.org/can-i-vote/absentee-early-voting"
  },
  {
    "id": 4,
    "text": "Check voter ID requirements",
    "reminder": true,
    "link": "https://www.usa.gov/voter-id"
  },
  {
    "id": 5,
    "text": "Know your voting rights",
    
    "reminder": true,
    "link": "https://www.aclu.org/know-your-rights/voting-rights"
  }
])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks 

  const fetchTasks = async () => {
    const res = await fetch ('http://localhost:3000/tasks')
    const data = await res.json()

    return data
  }

  //add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

  //complete(instead of delete) task
  const completeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
     <Header 
     onAdd={() => setShowAddTask(!showAddTask)} 
     showAdd={showAddTask}
     />
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} 
     onComplete={completeTask} 
     onToggle={toggleReminder}/>
     ) : ("No tasks to display"
     )}
    </div>
  );
}

export default App;
