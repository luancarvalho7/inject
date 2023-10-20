import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HouseCard } from '../components/cards/houseCard.jsx';



import chooseHouse from '../images/chooseHouse.svg'
import chooseSupplier from '../images/chooseSupplier.svg'
import './home.css'
import { SupplierCard } from '../components/cards/supplierCard';
import { GameCard } from '../components/cards/gameCard';

import logo from '../images/logo.png'
import arrow from '../images/chevron-right.svg'




export function Home({ data }) {

    return <>

        <div className="vip-container-home">
            <img src={logo} />
            <button className="vip-button">Acesso VIP <img src={arrow} /></button>
        </div>
        {/* Escolha sua casa de apostas */}
        <div className="miniSectionTitle"><img src={chooseHouse} /><p className='mainText'>Escolha a Casa de Apostas</p></div>
        {
            <Swiper
                slidesPerView={1.4}
                centeredSlides={false}
                spaceBetween={29.429}
                className="SwiperHouse"
            >
                {data.map((current, index) =>
                    <SwiperSlide key={index}>
                        <HouseCard data={current} />
                    </SwiperSlide>
                )}
            </Swiper>
        }
        {/* Escolha o seu Fornecedor */}
        <div className="miniSectionTitle"><img src={chooseSupplier} /><p className='mainText'> Escolha o Fornecedor</p></div>
        {
            <Swiper
                slidesPerView={1.85}
                centeredSlides={false}
                spaceBetween={30}
                className="SwiperSupplier"
            >
                {data[0].suppliers.map((current, index) =>
                    <SwiperSlide key={index}>
                        <SupplierCard data={current} />
                    </SwiperSlide>
                )}
            </Swiper>
        }
        {/* Jogos Disponíveis */}
        <div id="enabledGames">
            <h1 className='DisposableGames'> Jogos Disponíveis </h1>


            {
                <Swiper
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={30}
                    className="SwiperGames"
                >{
                        data[0].suppliers[0].games.map((current, index) =>
                            <SwiperSlide key={index}>
                                <GameCard data={current} />
                            </SwiperSlide>
                        )}
                </Swiper>}
        </div>
    </>
}