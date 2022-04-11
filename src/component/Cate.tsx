import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Cate = () => {
    return (
        <div><div>
            <div>
                <h1 className="text-4xl capitalize text-center my-10 normal">Mua sản phẩm được lựa chọn từ vườn</h1>
                <div className="relative grid grid-cols-6 ">
                    <div className="col-inner text-center">
                        <div className="container">
                            <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_1.png" className="image mx-auto" />
                            <div className="overlay absolute top-0 opacity-10 hover:opacity-100 left-7">
                                <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_1_hover.png" className="image" />
                            </div>
                        </div>
                        <h3 className="text-2xl mt-4 hover:text-lime-400"><a href="/#/products">Rau củ</a></h3>
                    </div>
                    <div className="col medium-3 small-4 large-2">
                        <div className="col-inner text-center">
                            <div className="container">
                                <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_2.png" className="image mx-auto" />
                                <div className="overlay absolute top-0 opacity-10 hover:opacity-100 left-[15.3rem]">
                                    <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_2_hover.png" className="image" />
                                </div>
                            </div>
                            <h3 className="text-2xl mt-4 hover:text-lime-400"><a href="/#/products">Hải sản</a></h3>
                        </div>
                    </div>
                    <div className="col medium-3 small-4 large-2">
                        <div className="col-inner text-center">
                            <div className="container">
                                <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_3.png" className="image mx-auto" />
                                <div className="overlay absolute top-0 opacity-10 hover:opacity-100 left-[28.5rem]">
                                    <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_3_hover.png" className="image" />
                                </div>
                            </div>
                            <h3 className="text-2xl mt-4 hover:text-lime-400"><a href="/#/products">Thịt trứng</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col medium-3 small-4 large-2">
                        <div className="col-inner text-center">
                            <div className="container">
                                <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_4.png" className="image mx-auto" />
                                <div className="overlay absolute top-0 opacity-10 hover:opacity-100 left-[41.8rem]">
                                    <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_4_hover.png" className="image" />
                                </div>
                            </div>
                            <h3 className="text-2xl mt-4 hover:text-lime-400"><a href="/#/products">Trái cây</a>
                            </h3>
                        </div>
                    </div>
                    <div className="col medium-3 small-4 large-2">
                        <div className="col-inner text-center">
                            <div className="container">
                                <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_5.png" className="image mx-auto" />
                                <div className="overlay absolute top-0 opacity-10 hover:opacity-100 left-[55.2rem]">
                                    <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_5_hover.png" className="image" />
                                </div>
                            </div>
                            <h3 className="text-2xl mt-4 hover:text-lime-400"><a href="/#/products">Đồ khô</a></h3>
                        </div>
                    </div>
                    <div className="col medium-3 small-4 large-2">
                        <div className="col-inner text-center">
                            <div className="container">
                                <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_6.png" className="image mx-auto" />
                                <div className="overlay absolute top-0 opacity-10 hover:opacity-100 right-8">
                                    <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_cate_6_hover.png" className="image" />
                                </div>
                            </div>
                            <h3 className="text-2xl mt-4 hover:text-lime-400"><a href="/#/products">Đồ uống</a></h3>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl capitalize text-center my-10 normal">Chương trình khuyến mãi</h1>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={3}
                >
                    <SwiperSlide><Link to=""><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`https://theme.hstatic.net/1000333483/1000450410/14/index_promotion_2.jpg?v=1943`} alt="" /></Link></SwiperSlide>
                    <SwiperSlide><Link to=""><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`https://theme.hstatic.net/1000333483/1000450410/14/index_promotion_3.jpg?v=1943`} alt="" /></Link></SwiperSlide>
                    <SwiperSlide><Link to=""><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`https://theme.hstatic.net/1000333483/1000450410/14/index_promotion_4.jpg?v=1943`} alt="" /></Link></SwiperSlide>
                    <SwiperSlide><Link to=""><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`https://theme.hstatic.net/1000333483/1000450410/14/index_promotion_5.jpg?v=1943`} alt="" /></Link></SwiperSlide>
                </Swiper>
            </div>
        </div></div>
    )
}

export default Cate