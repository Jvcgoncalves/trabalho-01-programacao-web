import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [time, setTime] = useState(0)
  const [renderTimer, setRenderTimer] = useState(false);

  return (
    <>
      <div className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column'>
        <div>
          <label htmlFor="time" className='fs-6 text-start'>Tempo em segundos: </label>
          <input value={time} onChange={(e) => setTime(+e.target.value)} type="number" id='time' className='form-control input' />
        </div>
        <div className='d-flex justify-content-center gap-3 align-items-center'>
          <button onClick={() => setRenderTimer(false)} className='btn btn-danger my-3 '> Cancelar </button>
          <button onClick={() => setRenderTimer(true)} className='btn btn-primary my-3'> Iniciar </button>
        </div>

        {
          renderTimer ? <Timer time={time}/> : null
        }
      </div>
    </>
  )
}

export default App
