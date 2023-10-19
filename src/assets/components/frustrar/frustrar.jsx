import React, { useEffect, useRef, useState } from "react";
import './frustrar.css'
import arrow from '../../images/chevron-right.svg'
import logo from '../../images/logo.png'

import { Stats } from "../stats/stats";

export function MinesGame() {
    const [valorVariavel, setValorVariavel] = useState(50);
    const progressBarRef = useRef(null);
    const percentageValueRef = useRef(null);

    useEffect(() => {
        const largura = `${valorVariavel}%`;
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
                        <Stats title={'Faturamento'} value={'R$100'}/>
                        <Stats title={'Pagamento'} value={'R$20'}/>
                    </div>
                </div>
                <button className="frustrate-button">Frustrar Conta</button>
            </div>
            <iframe src="https://bullsbet.net/" width="100%" height="1100px" frameBorder="0"></iframe>
        </div>
    );
};

