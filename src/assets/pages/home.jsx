


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { HouseCard } from '../components/cards/houseCard.jsx';



import chooseHouse from '../images/chooseHouse.svg'
import chooseSupplier from '../images/chooseSupplier.svg'
import { SupplierCard } from '../components/cards/supplierCard';
import { GameCard } from '../components/cards/gameCard';

import logo from '../images/logo.png'
import arrow from '../images/chevron-right.svg'
import './home.css'




export function Home({ data }) {

    return <>

        <div className="vip-container">
            <img src={logo} />
            <button className="vip-button">Acesso VIP <img src={arrow} /></button>
        </div>
        {/* Escolha sua casa de apostas */}
        <section className='hSection'>
            <div className="miniSectionTitle marginSpacings"><img src={chooseHouse} /><p className='mainText'>Escolha a Casa de Apostas</p></div>
            {
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    spaceBetween={16}
                    className="mySwiper"
                >
                    {data.map((current, index) =>
                        <SwiperSlide key={index}>
                            <HouseCard data={current} />
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        </section>
        {/* Escolha o seu Fornecedor */}
        <section className='hSection'>

            <div className="miniSectionTitle marginSpacings"><img src={chooseSupplier} /><p className='mainText'>Escolha Escolha o Fornecedor</p></div>
            {
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    spaceBetween={16}
                    className="mySwiper"
                >
                    {data[0].suppliers.map((current, index) =>
                        <SwiperSlide key={index}>
                            <SupplierCard data={current} />
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        </section>

        {/* Jogos Disponíveis */}
        <div id="enabledGames" className='hSection'>
            <h1 className='mainText'> Jogos Disponíveis </h1>


            {
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    spaceBetween={16}
                    className="mySwiper"
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