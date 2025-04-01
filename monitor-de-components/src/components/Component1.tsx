import { useEffect } from "react"

export default function Component1() {

  useEffect(() => {
    console.log("Componente 1 está renderizado");

    return () => {
      console.log("Componente 1 está desmontado");
    };
  }, []);
  
  return (
    <p>Componente 1</p>
  )
}