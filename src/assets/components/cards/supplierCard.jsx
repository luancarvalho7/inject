
import './selectCard.css'
import spribe from '../../images/spribe.png'
import { Stats } from '../stats/stats'
export function SupplierCard({data}) {

    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number;
        }
    }

    return (
        <div className="supplierCard selectCard card-enabled">
            <div className="sc-content">
                <img src={spribe} className="image" />
                <div className="houseData supp-houseD">

                    <Stats title={'Pagamento'} value={`R$ ${formatBigNumber(data.payment)}`}/>
                    <Stats title={'Faturamento'} value={`R$ ${formatBigNumber(data.revenue)}`}/>

                </div>
            </div>
        </div>
    )
}