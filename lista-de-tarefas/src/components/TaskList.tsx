import Task from "../interfaces/task";

export default function TaskList({ tasks, setTasks }: { tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
  function deleteTask(i: number) {
    setTasks(tasks.filter((_, idx) => i !== idx))
  }
  
  function handleCheck(index: number, checked: boolean) {
    setTasks(tasks => tasks.map((task, i) => i === index ? { ...task, completed: checked } : task));
  }
  
  return (
    <>
      {
        !tasks.length ? null : (
          tasks.map((task, index) => (
            <tr>
              <td>{ task.name }</td>
              <td><input className="form-check-input"  onChange={(element) => handleCheck(index, element.target.checked)} type="checkbox" role="switch" /></td>
              <td><button type="button" onClick={() => deleteTask(index)} className="btn-close d-block ms-auto" aria-label="Close"></button></td>
            </tr>
          ))
        )
      }
    </>
  )
}