import { useState, useMemo } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState("+");
  
  const result = useMemo(() => {
    switch (operation) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      case "/":
        return secondNumber !== 0 ? firstNumber / secondNumber : "Divisão por 0 não é permitida";
    }
  }, [firstNumber, secondNumber, operation]);

  return (
    <div className="container-fluid bg-dark text-white">
      <div className="w-50 m-auto d-flex flex-column pt-5">
        <h1>Calculadora Simples</h1>
        
        <div className="d-flex row mx-0 mb-3 align-items-center">
          <div className="col-5 pe-3 ps-0">
            <label htmlFor="first-number" className="form-label">Algum número</label>
            <input type="number"
                  id="first-number" 
                  value={firstNumber}
                  className="form-control"
                  onChange={(e) => setFirstNumber(Number(e.target.value))}
                  placeholder="Número 1"/>
          </div>

          <div className="col-2 mt-4">
            <p className="mb-0 text-center">{ operation }</p> 
          </div>

          <div className="col-5 ps-3 pe-0 mx-0">
            <label htmlFor="second-number" className="form-label">Outro número</label>
            <input type="number"
                   value={secondNumber}
                   className="form-control"
                   id="second-number"
                   onChange={(e) => setSecondNumber(Number(e.target.value))}
                   placeholder="Número 2"/>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={() => setOperation("+")}>
              +
            </button>
          </div>

          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={() => setOperation("-")}>
              -
            </button>
          </div>

          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={() => setOperation("*")}>
              *
            </button>
          </div>

          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={() => setOperation("/")}>
              /
            </button>
          </div>
        </div>
        
        <p>Resultado: { result }</p>
      </div>
    </div>
  );
}
