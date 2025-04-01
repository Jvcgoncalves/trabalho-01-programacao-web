import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className='counter-block'>
        <h1>
          Contador
        </h1>

        <div className='counter-actions'>
          <button className="button" onClick={() => setCount(count => count - 1)}>
            -
          </button>

          <span>
            { count }
          </span>

          <button className="button" onClick={() => setCount(count => count + 1)}>
            +
          </button>
          </div>
      </div>      
    </>
  )
}

export default App
