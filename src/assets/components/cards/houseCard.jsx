import './selectCard.css'
import bullsbet from '../../images/bullsbet.png'


export function HouseCard() {
    return (
        <> <div className="houseCard selectCard card-enabled" >
            <div className="sc-content">
                <img src={bullsbet}  className="image"/>
                <div className="houseData">

                </div>
            </div>

        </div> </>
    )
}