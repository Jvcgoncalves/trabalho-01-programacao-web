import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [amiiboData, setAmiiboData] = useState<AmiboData[] | null>(null);
  const [amountToShow, setAmountToShow] = useState<number>(10);  
  const [dataToDisplay, setDataToDisplay] = useState<AmiboData[] | null>(null);
  
  useEffect(() => {
    getData();
  }, [])
  
  async function getData() {
    try {
      if (!amiiboData) {
        const response = await axios.get<{ amiibo: AmiboData[] }>("https://www.amiiboapi.com/api/amiibo/")
        console.log(response.data.amiibo)
        setAmiiboData(response.data.amiibo);
      }
    } catch (error) {
      console.error(amiiboData);
    }
  }
  
  useEffect(() => {
    if (amiiboData) {
      setDataToDisplay(amiiboData.slice(0, amountToShow))
    }
  }, [amiiboData, amountToShow])
  
  return (
    <div className='container-fluid bg-dark'>
      <div className='content d-flex align-items-center flex-column text-white mx-auto'>
        <h1 className='fs-3 mt-5 text-center'>Dados da api</h1>
        {
          dataToDisplay?.length ? (
            dataToDisplay.map(amiiboItem => (
              <div className='bg-white text-dark mb-3 rounded-3 p-3 w-100'>
                <img className='img-fluid' src={amiiboItem.image} alt="imagem" />
                <p className='m-1 mt-2'>Nome: { amiiboItem.name }</p>
                <p className='m-1'>Serie: { amiiboItem.amiiboSeries }</p>
                <p className='m-1'>Serie de jogos: { amiiboItem.gameSeries }</p>
                <p className='m-1'>Personagem: { amiiboItem.character }</p>
                <p className='m-1'>head: { amiiboItem.head }</p>
                <p className='m-1'>Data dos lançamentos:</p>
                <ul>
                  <li> { amiiboItem.release.au } </li>
                  <li> { amiiboItem.release.eu } </li>
                  <li> { amiiboItem.release.jp } </li>
                  <li> { amiiboItem.release.na } </li>
                </ul>
                <p className='m-1'>Tail: { amiiboItem.tail } </p>
                <p className='m-1'>Tipo: { amiiboItem.type } </p>
              </div>
            ))
          ) : (
            <p>Sem dados</p>
          )
        }
        <div className='action-buttons d-flex gap-3 mb-3'>
          <button className='btn btn-danger' onClick={() => setAmountToShow(last => last == 10 ? 10 :  last - 10)}>
            Ver menos
          </button>

          <button className='btn btn-primary' onClick={() => setAmountToShow(last => last + 10)}>
            Ver mais
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

interface AmiboData {
  amiiboSeries: string,
  character: string,
  gameSeries: string,
  head: number,
  image: string,
  name: string,
  release: {
    au: any,
    eu: any,
    jp: any,
    na: any
  },
  tail: number,
  type: string
}