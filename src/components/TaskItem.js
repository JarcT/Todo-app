import './taskItem.css'
import { useState } from 'react';

const TaskItem = ({task, deleteTask}) => {
    const [isChecked, setIsChecked] = useState(task.checked);
    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
    }


    return (
        <li className="task">
            <div className="task-group">
                <input type="checkbox" className='checkbox' checked={isChecked} name={task.name} id={task.id} onChange={handleCheckboxChange}/>
                <label htmlFor={task.id} className="task-label">
                    {task.name}
                </label>
            </div>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </li>
    )
}
export default TaskItem