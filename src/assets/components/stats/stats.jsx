import './stats.css'
import { Percentage } from './percentage.jsx'

export function Stats(){
    return <>
    <div className="statsInfo">
        <h2>Pagamento</h2>
        <h1>R$ 400K</h1>
        <Percentage/>
    </div>
</>
}