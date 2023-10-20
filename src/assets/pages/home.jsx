import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HouseCard } from '../components/cards/houseCard.jsx';



import chooseHouse from '../images/chooseHouse.svg'
import chooseSupplier from '../images/chooseSupplier.svg'
import './home.css'
import { SupplierCard } from '../components/cards/supplierCard';



export function Home({ data }) {

    return <>


        {/* Escolha sua casa de apostas */}
        <div className="miniSectionTitle"><img src={chooseHouse} /><p className='mainText'>Escolha a Casa de Apostas</p></div>
        {
            <Swiper
                slidesPerView={1.4}
                centeredSlides={false}
                spaceBetween={30}
                className="mySwiper"
            >
                {data.map((current, index) =>
                    <SwiperSlide key={index}>
                        <HouseCard data={current} />
                    </SwiperSlide>
                )}
            </Swiper>
        }
        {/* Escolha o seu Fornecedor */}
        <div className="miniSectionTitle"><img src={chooseSupplier} /><p className='mainText'>Escolha Escolha o Fornecedor</p></div>
        {
            <Swiper
                slidesPerView={1.4}
                centeredSlides={false}
                spaceBetween={30}   
                className="mySwiper"
            >
                {data[0].suppliers.map((current, index) =>
                    <SwiperSlide key={index}>
                        <SupplierCard data={current}/>
                    </SwiperSlide>
                )}
            </Swiper>
        }
    </>
}