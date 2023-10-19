import { Stats } from "../stats/stats"
import { useState, useEffect } from "react";
import { ProgressBar } from "./gameProgress";


export function GameCard({ data }) {

    const gamePercentage = (data.revenuePercentage*3).toFixed(0)
    const gameImg = data.image
    const gameRev = formatBigNumber(data.revenue)
    const gamePay = formatBigNumber(data.revenue * 0.2)

 


    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number;
        }

        
    }
    return (<div className="gameCard-stroke selectCard card-enabled">
        <div className="gameCard-ui sc-content">
            <div className="imgfade"></div>
            <img src={gameImg} className="gameImage" />
            <div className="houseData gms-houseD">
                <Stats
                    title={'Pagamento'}
                    value={`R$ ${gamePay}`}
                />
                <Stats
                    title={'Faturamento'}
                    value={`R$ ${gameRev}`}
                />
            </div>
            <ProgressBar valorVariavel={gamePercentage}/>
        </div>
    </div>)
}