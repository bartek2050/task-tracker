import Task from "./Task";

const Tasks = ({tasks, onDelete, onToogle}) => {
    return (
        <>
            {tasks.map((task) =>
                <Task key={task.id} task={task} deleteTask={onDelete} reminder={onToogle}/>
            )}
        </>
    )
}

export default Tasks;