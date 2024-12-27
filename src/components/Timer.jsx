import { startTransition, useEffect, useRef, useState } from "react";

// Timer con start, stop e reset
export function Timer() {
  const [time, setTime] = useState(0); // Stato per il tempo
  const idRef = useRef(); // useRef per memorizzare l'ID di interval

  // Avvio il timer
  const startTimer = () => {
    if (!idRef.current) {
      idRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Ferma il timer
  const stopTimer = () => {
    if (idRef.current) {
      clearInterval(idRef.current); // Ferma intervallo
      idRef.current = null;
    }
  };

  // Resetta il timer
  const resetTimer = () => {
    stopTimer(); // Ferma il timer
    setTime(0); // Resetta il tempo
  };

  // Pulisce l'intervallo quando il componente si smonta
  useEffect(() => {
    return () => stopTimer(); // Pulizia timer
  }, []);

  return (
    <>
      <h1>{time} secondi</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}
