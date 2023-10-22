import './selectCard.css'
import { Stats } from '../stats/stats'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function HouseCard({ data }) {

    const [BullsBet, setBullsBet] = useState(false)
    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number.toString();
        }
    }
    
    useEffect(() => {if (data.casino == "BullsBet"){
        setBullsBet(true)
    }}, [])

    const navigate = useNavigate();

    return (
        <> <div className={BullsBet ? "houseCard selectCard card-enabled" : "houseCard selectCardBlocked card-enabled"} 
            onClick={() => navigate('/fornecedores')}  
           >
            <div className={BullsBet ? "sc-content" : "sc-content-blocked"}>
                <img src={data.image} className={BullsBet ? "image" : "image-blocked"} />
                <div className={BullsBet ? "houseData" : "houseData lowopacity"} >
                    <Stats
                        title={'Pagamento'}
                        value={`R$ ${formatBigNumber(data.revenue * 0.2)}`}
                    />

                    <Stats
                        title={'Faturamento'}
                        value={`R$ ${formatBigNumber(data.revenue)}`}
                    />

                    <Stats
                        title={'Jogadores'}
                        value={formatBigNumber(data.players)}
                    />
                </div>
            </div>

        </div> </>
    )
}