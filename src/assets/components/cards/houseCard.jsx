import './selectCard.css'
import bullsbet from '../../images/bullsbet.png'
import { Stats } from '../stats/stats'


export function HouseCard({ data }) {

    function formatBigNumber(number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + 'K';
        } else {
            return number.toString();
        }
    }

    return (
        <> <div className="houseCard selectCardBlocked card-enabled" >
            <div className="sc-content-blocked">
                <img src={bullsbet} className="image-blocked" />
                <div className="houseData">
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