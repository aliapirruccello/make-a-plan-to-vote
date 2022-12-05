import {FaExternalLinkAlt} from 'react-icons/fa'



const Task = ({ task, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
          {task.text} 

        
          <FaExternalLinkAlt
          className="checkbox"
          style={{ color: 'white', cursor: 'pointer'}} 
          onClick={() => window.open(task.link, "_blank")}
          />
          </h3>
        <p>{task.day}</p>
    
    
</div>
  )
}

export default Task