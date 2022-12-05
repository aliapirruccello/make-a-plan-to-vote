import {FaTimes} from 'react-icons/fa'


const Task = ({ task, onComplete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
          {task.text} <FaTimes
          className="checkbox"
          style={{ color: 'purple', cursor: 'pointer'}} 
          onClick={() => onComplete(task.id)}
          />
          </h3>
        <p>{task.day}</p>
    
    
</div>
  )
}

export default Task