import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideProduct.css"

// import required modules
import { Pagination, Navigation } from "swiper";

const SlideProduct = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://theme.hstatic.net/1000333483/1000450410/14/shop_offer_banner_2.jpg?v=1943" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://theme.hstatic.net/1000333483/1000450410/14/shop_offer_banner_1.jpg?v=1943" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlideProduct