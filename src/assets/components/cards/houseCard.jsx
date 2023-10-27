import './selectCard.css'
import { Stats } from '../stats/stats'
import { useState, useEffect } from 'react';

import Modal from '../modal/modal';

export function HouseCard({ data, setShowModal, currentHouse, setCurrentHouse, vipAccess }) {

    const [BullsBet, setBullsBet] = useState(null);

    useEffect(() => { 
        console.log('BullsBet VALUE:' + BullsBet +  ' ' + currentHouse)
    }, [currentHouse])

    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number.toString();
        }
    }

    useEffect (()=>{
        if(currentHouse != data.casino){
            setBullsBet(false)
        }else{
            setBullsBet(true)
        }
    },[currentHouse])

    const handleCardClick = () => {
        if (vipAccess) {
            setCurrentHouse(data.casino)
            setBullsBet(true)
        } else {
            if (data.casino != currentHouse) {
                setShowModal(true);
            }
        }

    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div
                className={BullsBet ? "houseCard selectCard card-enabled" : "houseCard selectCardBlocked card-enabled"}
                onClick={handleCardClick}
            >
                <div className={BullsBet ? "sc-content" : "sc-content-blocked"}>
                    <img src={data.image} className={BullsBet ? "image" : "image-blocked"} />
                    <div className={BullsBet ? "houseData" : "houseData lowopacity"}>
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
            </div>

        </>
    )
}
