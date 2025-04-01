import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AsideMenu from './components/aside-menu/AsideMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid bg-dark text-white px-0'>
      <Header />
      <div className='row mx-0 px-0'>
        <AsideMenu classes="col-3" />
        <p className="col-9">
          conteudo
        </p>
      </div>
    </div>
  )
}

export default App
