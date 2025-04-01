import { useEffect, useState } from "react";

export default function Timer({ time: initialTime }: { time: number }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      console.log("interval rodando")
      setTimeLeft(time => time - 1);
    }, 1000)
    
    return () => clearInterval(interval)
  }, [timeLeft]);
  
  return (
    <>
      <p className="fs-6">Tempo restante { timeLeft }</p>
    </>
  )
}