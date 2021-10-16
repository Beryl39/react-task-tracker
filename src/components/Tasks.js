import Task from './Task'

//tasks component takes possible functions as argument props

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
            {tasks.map((task) => (
                <Task 
                key={task.id} 

                //add functions that are possible with component, as props
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
