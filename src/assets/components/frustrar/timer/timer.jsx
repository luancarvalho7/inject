import React, { useState, useEffect } from 'react';

export function Timer() {
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * (12 - 3 + 1) + 3));
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (minutes > 0 || seconds > 0) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  return (
      <span>{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
  );
}
