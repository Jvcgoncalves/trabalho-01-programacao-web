import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList';
import Task from './interfaces/task';

function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showLengthMessage, setShowLengthMessage] = useState<boolean>(false);

  function handleTyping(inputValue: string) {
    setTaskName(inputValue);
    setShowLengthMessage(false);
  }
  
  function addTask() {
    if (taskName.length < 3) {
      setShowLengthMessage(true);
    } else {
      setTasks(tasks => [...tasks, { name: taskName, completed: false }]);
      setTaskName("");
    }
  }
  
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-dark text-white'>
      <div className='task-block'>
        <h1 className='display-6'>
          Lista de tarefas
        </h1>
        <div className='d-flex flex-column gap-1'>
          <label htmlFor="task-name">Nome da tarefa</label>
          <input type="text" id='task-name' className='form-control' value={taskName} onChange={(input) => handleTyping(input.target.value)}/>
          {
            showLengthMessage ? <span>pelo menos 3 caracteres</span> : null
          }
          <button className='btn btn-primary mt-3' onClick={addTask}>
            Adicionar tarefa
          </button>
        </div>

        <table className='table mt-3'>
          <thead>
            <tr className='w-100'>
              <th scope='col' className='w-50'>Nome</th>
              <th scope='col' className='w-25'>Feita</th>
              <th scope='col' className='w-25'></th>
            </tr>
          </thead>
          <tbody>
            <TaskList tasks={tasks} setTasks={setTasks}/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
