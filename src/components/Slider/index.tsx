import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type Slide from '../../interfaces/slide';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css';

interface SlideProp {
	slides: Slide[]
    wide?: boolean
}

const Slider = ({ slides, wide }: SlideProp) => {
	return (	
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{
                bulletClass: 'dot',
                bulletActiveClass: 'dot-active',
                clickable: true,
                horizontalClass: 'custom-pagination'
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
        >
            {slides?.map((el, index) => 
                <SwiperSlide key={index}>
                    <img src={`${import.meta.env.PUBLIC_STRAPI_URL}${el.attributes.url}`} className={`h-364 w-full ${wide?'sm:h-400':'sm:h-600'} object-cover`} alt='img' />
                </SwiperSlide>
            )}
        </Swiper>
	)
}

export default Slider;