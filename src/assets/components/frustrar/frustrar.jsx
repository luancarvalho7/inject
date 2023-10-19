import React, { useEffect, useRef, useState } from "react";
import './frustrar.css'
import arrow from '../../images/chevron-right.svg'
import logo from '../../images/logo.png'

import { Stats } from "../stats/stats";

export function MinesGame({data}) {

    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number;
        }}


    const gamePercentage = (data.revenuePercentage*3).toFixed(0)
    const gameRev = formatBigNumber(data.revenue)
    const gamePay = formatBigNumber(data.revenue * 0.2)


  

    useEffect(() => {

        console.log(data)

        setValorVariavel(gamePercentage)
    })


    // codigo pra aumentar a % 

    const [valorVariavel, setValorVariavel] = useState(50);
    const progressBarRef = useRef(null);
    const percentageValueRef = useRef(null);


    useEffect(() => {
        const largura = `${valorVariavel * 1.5}%`;
        progressBarRef.current.style.width = largura;
        percentageValueRef.current.textContent = `${valorVariavel}%`;
    }, [valorVariavel]);

    return (
        <div className="container">
            <div className="vip-container">
                <img src={logo}/>
                <button className="vip-button">Acesso VIP <img src={arrow}/></button>
            </div>
            <div className="box">
                <h1 className="game-title">Mines</h1>
                <div className="progress-bar">
                    <div className="percentage-indicator" id="percentageIndicator">
                        <span ref={percentageValueRef} id="percentageValue"></span>
                    </div>
                    <div ref={progressBarRef} className="progress-fill" id="progressFill"></div>
                </div>
                <div className="game-info-container">
                    <p className="game-info">O sistema da SPRIBE irá te identificar como um jogador “frustrado” da BullsBet e vai fazer com que suas chances de ganhar aumentem</p>
                
                    <div className="game-pay-reve">
                    <Stats
                    title={'Pagamento'}
                    value={`R$ ${gamePay}`}
                />
                <Stats
                    title={'Faturamento'}
                    value={`R$ ${gameRev}`}
                />
                    </div>
                </div>
                <button className="frustrate-button">Frustrar Conta</button>
            </div>
            <iframe src="https://bullsbet.net/" width="100%" height="1100px" frameBorder="0"></iframe>
        </div>
    );
};

