
import './selectCard.css'
import { Stats } from '../stats/stats'
import { useState, useEffect } from 'react';
export function SupplierCard({data}) {

    const [PG, setPG] = useState(false)
    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number;
        }
    }

    useEffect(() => {if (data.name == "PG Soft"){
        setPG(true)
    }}, [])

    return (
        <div className={PG ? "supplierCard selectCard card-enabled" : "supplierCard selectCardBlocked card-enabled"}>
            <div className={PG ? "sc-content" : "sc-content-blocked"}>
                <img src={data.image} className="image" />
                <div className="houseData supp-houseD">

                    <Stats title={'Pagamento'} value={`R$ ${formatBigNumber(data.payment)}`}/>
                    <Stats title={'Faturamento'} value={`R$ ${formatBigNumber(data.revenue)}`}/>

                </div>
            </div>
        </div>
    )
}