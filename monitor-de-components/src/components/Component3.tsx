import { useEffect } from "react"

export default function Component3() {

  useEffect(() => {
    console.log("Componente 3 está renderizado");

    return () => {
      console.log("Componente 3 está desmontado");
    };
  }, []);
  
  return (
    <p>Componente 3</p>
  )
}