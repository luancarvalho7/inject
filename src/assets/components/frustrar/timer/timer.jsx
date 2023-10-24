import React, { useState, useEffect } from 'react';

export function Timer({ hideClassesCallback }) {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    let interval;
    if (minutes > 0 || seconds > 0) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setTimeIsUp(true);
            hideClassesCallback(true); // Ocultar as classes em terminal.jsx
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      setTimeIsUp(true);
      hideClassesCallback(true); // Ocultar as classes em terminal.jsx
    }

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  return (
    <div>
      {timeIsUp ? (
        <div>
          <p className='End-Info'>
            Seu tempo acabou, retorne para a página inicial e espere no mínimo <strong>2 minutos</strong> antes de jogar no mesmo jogo.
          </p>
          <a href='/'><button className="sucess-button">Voltar pra Página Inicial</button></a>
        </div>
      ) : (
        <span>{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
      )}
    </div>
  );
}
