import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [runTime, setRunTime] = useState<1 | 2>(1);
  const [currentTime, setCurrentTime] = useState(0);
  
  function handleTimerStart() {
    if (runTime == 1) {
      setRunTime(2);
    } else if (runTime == 2) {
      setRunTime(1);
    }

    if (currentTime > 0) {
      setCurrentTime(0);
    }
  }
  
    
  useEffect(() => {
    if (runTime == 1) {
      return;
    } else if (runTime == 2) {
      const interval = setInterval(() => {
        setCurrentTime(time => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [runTime]);
  
  return (
    <>
      <div className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column'>
        <div className='d-flex justify-content-center gap-3 align-items-center'>
          <button onClick={() => handleTimerStart()} className='btn btn-primary my-3'> { runTime == 1 && currentTime == 0 ? 'Iniciar' : 'Reiniciar' } </button>
        </div>

        <p className="fs-6">Tempo atual: { currentTime }</p>
      </div>
    </>
  )
}

export default App
