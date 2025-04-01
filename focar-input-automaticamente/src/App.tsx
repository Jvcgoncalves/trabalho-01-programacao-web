import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    handleFocus();
  }, [])
  
  function handleFocus() {
    emailRef.current?.focus();
  }

  return (
    <div className='container-fluid bg-dark text-white'>
      <div className='w-50 m-auto pt-5'>
        <h1 className='text-center'>Formulário simples</h1>

        <label htmlFor="email" className='form-label'>Email:</label>
        <input id='email' className='form-control mb-3' ref={emailRef} onChange={() => setSent(false)} type="email"/>

        <label htmlFor="password" className='form-label'>Senha:</label>
        <input id='password' className='form-control' ref={passwordRef} onChange={() => setSent(false)} type="password"/>

        <button className='btn btn-primary mt-5 d-block mx-auto' onClick={() => setSent(true)}>
          enviar
        </button>

        {
          sent ? <p className='text-success'>Enviado!</p> : null
        }

      </div>
    </div>
  )
}

export default App
