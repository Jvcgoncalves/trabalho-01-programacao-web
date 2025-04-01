import { useState } from 'react'
import './App.css'
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  const [componentsToShow, setComponentsToShow] = useState<string[]>([]);

  function handleCheckboxChange(value: boolean, component: string) {
    switch (component) {
      case "component-1":
        if (value) {
          setComponentsToShow(components => [...components, "component-1"]);
        } else {
          setComponentsToShow(components => components.filter(component => component !== "component-1"));
        }
      break;
      case "component-2":
        if (value) {
          setComponentsToShow(components => [...components, "component-2"]);
        } else {
          setComponentsToShow(components => components.filter(component => component !== "component-2"));
        }
      break;
      case "component-3":
        if (value) {
          setComponentsToShow(components => [...components, "component-3"]);
        } else {
          setComponentsToShow(components => components.filter(component => component !== "component-3"));
        }
      break;
    }
  }
  
  return (
    <div className='container-fluid bg-dark text-white'>
      <div className='mx-auto w-50 pt-5'>
        <h1>
          Components
        </h1>

        <div>
          {
            ["component-1", "component-2", "component-3"].map((component) => (
              <div className="form-check" key={component}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={component}
                  checked={componentsToShow.includes(component)}
                  onChange={(e) => handleCheckboxChange(e.target.checked, component)}
                />
                <label className="form-check-label" htmlFor={component}>
                  {componentsToShow.includes(component) ? "Ocultar" : "Mostrar"} {component.replace("component-", "Componente ")}
                </label>
              </div>
            ))
          }
        </div>

        <div className='d-flex flex-column mt-3 text-center'>
          {
            !componentsToShow.length ? null : componentsToShow.map(component => {
              switch (component) {
                case "component-1":
                  return <Component1 />;
                case "component-2":
                  return <Component2 />;
                case "component-3":
                  return <Component3 />;
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
