import { FaTimes } from 'react-icons/fa'

//pass possible functions as arguments to the function, also add them as props to the component

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            //when a user double clicks on a task with specific id, onToggle function runs on that task
            onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'salmon', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
