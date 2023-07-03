import TaskItem from './TaskItem'

//styles
import './taskList.css'

const TaskList = ({tasks, deleteTask}) => {
    return (
        <ul className="tasks">
            {tasks.sort((a, b) => b.id - a.id).map(task => 
                <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>
            )}
        </ul>
    )
}

export default TaskList