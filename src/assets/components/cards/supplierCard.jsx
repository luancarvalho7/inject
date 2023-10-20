
import './selectCard.css'
import { Stats } from '../stats/stats'
import { useState, useEffect } from 'react';
export function SupplierCard({data}) {

    const [Spribe, setSpribe] = useState(false)
    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number;
        }
    }

    useEffect(() => {if (data.name == "Spribe"){
        setSpribe(true)
    }}, [])

    return (
        <div className={Spribe ? "supplierCard selectCard card-enabled" : "supplierCard selectCardBlocked card-enabled"}>
            <div className={Spribe ? "sc-content" : "sc-content-blocked"}>
                <img src={data.image} className={Spribe ? "image" : "image-blocked"} />
                <div className={Spribe ? "houseData supp-houseD" : "houseData supp-houseD lowopacity"}>

                    <Stats title={'Pagamento'} value={`R$ ${formatBigNumber(data.payment)}`}/>
                    <Stats title={'Faturamento'} value={`R$ ${formatBigNumber(data.revenue)}`}/>

                </div>
            </div>
        </div>
    )
}