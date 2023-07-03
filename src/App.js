import './App.css';
import { useState } from 'react';

//costum components
import Form from './components/Form' 
import TaskList from './components/TaskList.js'


function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (task) => {
    setTasks(previousState => [...previousState, task])
    }
  const deleteTask = (id) => {
    setTasks(previousState => previousState.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <header className="container">
        <h1>Task List</h1>
      </header>
      <Form addTask={addTask}/>
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask}/>}
    </div>
  );
}

export default App;
