import { useEffect } from "react"

export default function Component2() {

  useEffect(() => {
    console.log("Componente 2 está renderizado");

    return () => {
      console.log("Componente 2 está desmontado");
    };
  }, []);
  
  return (
    <p>Componente 2</p>
  )
}