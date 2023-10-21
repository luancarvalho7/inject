import React, { useState, useEffect } from 'react';
import './terminal.css';
import { Timer } from '../timer/timer';

export function Terminal({ house, supplier, game }) {
  function formatString(inputString) {
    return inputString.replace(/\s+/g, '_').toLowerCase();
  }

  const fHouse = formatString(house);
  const fSupplier = formatString(supplier);
  const fGame = formatString(game);

  const [currentTask, setCurrentTask] = useState(0);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [successVisible, setSuccessVisible] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const randomTime = () => Math.floor(Math.random() * (5000 - 900 + 1) + 900);
  const randomTimeUpdate = () => Math.floor(Math.random() * (1200 - 900 + 1) + 900);
  const tasks = Array.from({ length: 9 }, () => randomTime());

  const randomSuccessTime = () => Math.floor(Math.random() * (10 - 3 + 1) + 3) * 60 * 1000;

  useEffect(() => {
    function processTask(index) {
      if (index >= tasks.length) {
        setSuccessVisible(true);
        setRemainingTime(randomSuccessTime());
        return;
      }

      setCurrentTask(index + 1);

      if (index === 3) {
        let interval = setInterval(() => {
          setLoadingPercentage((prev) => {
            const increment = Math.floor(Math.random() * 10);
            const nextValue = prev + increment;

            if (nextValue >= 100) {
              clearInterval(interval);
              setLoadingPercentage(100);
              processTask(index + 1);
              return 100;
            }
            return nextValue;
          });
        }, randomTimeUpdate());
      } else {
        setTimeout(() => {
          processTask(index + 1);
        }, tasks[index]);
      }
    }

    processTask(0);
  }, []);

  return (
    <div id="terminalSection">
      <div className="t-labels-holder">
        <p className='tLabel secondText'> {`${house} > ${supplier} > ${game}`} </p>
        <p className='tLabel secondText'> Terminal </p>
      </div>

      <div id="terminal" className={successVisible ? 'blur' : ''}>
        {currentTask >= 1 && <p><span className='t-grey'>Iniciando o processo de</span> Frustração <span className='t-grey'> via </span> <span className='t-orange'> Inject</span></p>}
        {currentTask >= 2 && <p>Conectando à<span className='t-yellow'> API </span></p>}
        {currentTask >= 3 && <p>Conectando à <span className='t-green'>{fHouse}.</span><span className='t-pink'>{fGame}</span></p>}
        {currentTask >= 4 && <p>
          Baixando configuração{' '}
          <span className="t-grey">
          // [{'.'.repeat(loadingPercentage / 10)}] {loadingPercentage}%
          </span>
        </p>}
        {currentTask >= 5 && <p>Criando <span className='t-red'>requisição</span><span className='t-orange'> Inject </span></p>}
        {currentTask >= 6 && <p>Enviando <span className='t-red'>requisição</span> à <span className='t-yellow'>api</span><span className='t-green'>.{fSupplier}.co/</span><span className='t-pink'>aviator</span></p>}
        {currentTask >= 7 && <p>Alternado <span className='t-white'>status</span> da conta</p>}
        {currentTask >= 8 && <p><span className='t-grey'>//// <br /> Sucesso!</span></p>}
      </div>

      {successVisible && (
        <div className={`success-overlay ${successVisible ? 'show-success' : ''}`}>
          <div className="success-content">
            <img src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" alt="Ícone de check" width={"55px"}/>
            <h1 className='Sucess-sucess-overlay'>Sucesso!</h1>
            <h6 className='Frustrated-Info'>O sistema da SPRIBE ira te identificar como um jogador "frustrado" e vai fazer com que você comece a ganhar nos próximos:</h6>
            <Timer/>
            <p className='Time-Left'>tempo restante </p>
            <button className="sucess-button">Jogar Agora</button>
          </div>
        </div>
      )}
    </div>
  );
}
