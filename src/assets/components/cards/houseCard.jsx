import './selectCard.css'
import bullsbet from '../../images/bullsbet.png'
import { Stats } from '../stats/stats'



export function HouseCard() {
    return (
        <> <div className="houseCard selectCard card-enabled" >
            <div className="sc-content">
                <img src={bullsbet}  className="image"/>
                <div className="houseData">
                    <Stats/>
                </div>
            </div>

        </div> </>
    )
}