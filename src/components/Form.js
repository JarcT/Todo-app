import {useState} from 'react';
import './Form.css'

const Form = ({addTask}) => {
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name : task,
            checked: false,
            id : Date.now()
        })
        setTask("")
    }
    return (
        <form className="todo-form" onSubmit={handleFormSubmit}>
            <div classNamgite="wrapper">
                <label htmlFor="task" className="label">Enter Task:</label>
                <input type="text" id="task"  className="input" value={task} onInput={(e) => setTask(e.target.value)}  required autoFocus maxLength={60} />
            </div>
            <button className="btn" type='submit'>Submit</button>
        </form>
    )
};

export default Form;