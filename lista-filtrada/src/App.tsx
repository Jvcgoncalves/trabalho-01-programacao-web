import { useMemo, useState } from 'react'
import './App.css'
import ListItems from './ListItems';

function App() {
  const [filter, setFilter] = useState("");
  const [testChangeState, setTestChangeState] = useState(false);
  const items: string[] = ["Fiat", "Volkswagen", "Chevrolet", "Ford", "Renault", "Peugeot", "Citroën", "Honda", "Toyota", "Hyundai", "Nissan", "Jeep", "BMW", "Mercedes-Benz", "Mitsubishi"];

  const itemsToShow = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
  }, [filter])
  
  return (
    <div className='container-fluid px-0 mx-0 d-flex justify-content-center text-bg-dark'>
      <div className='content w-25'>
        <h1 className='display-5'>Lista filtrada</h1>  
        <label className='form-label' htmlFor="input">Filtrar por</label>
        <input className='form-control' type="text" id='input' value={filter} onChange={(element) => setFilter(element.target.value)}/>

        <button className='btn btn-outline-primary' onClick={() => setTestChangeState(!testChangeState)}> clicar </button>

        <ListItems itemsToShow={itemsToShow}/>
      </div>
    </div>
  )
}

export default App
