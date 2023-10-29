import './nav.css'
import arrow from '../../images/chevron-right.svg';

import logo from '../../images/logo.png'


import { useNavigate } from 'react-router-dom';
export function Nav() {

    const navigate = useNavigate()

    function backHome() {
        navigate('/')
    }

    return (
        <nav className="vip-container">
            <img src={logo} height={120} onClick={backHome} />
            <a href='https://checkout.perfectpay.com.br/pay/PPU38CNDESA' target='_blank'><button className="vip-button">Acesso VIP <img src={arrow} /></button></a>
        </nav >
    )

}

