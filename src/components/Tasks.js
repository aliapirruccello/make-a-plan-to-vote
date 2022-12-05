import Task from './Task'

const Tasks = ({ tasks, onComplete, onToggle }) => {

  return (
    <div>
        {tasks.map((task) => (
            <Task 
            key={task.id} 
            task={task} 
            onComplete={onComplete}
            onToggle={onToggle}
            />
        ))}
    </div>
  )
}

export default Tasks