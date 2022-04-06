import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/product/productSlice'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Product = () => {
    const product = useSelector((data: any) => data.product.value)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            <div className='my-5'>
                <div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={4}
                    >
                        {product?.map((product: any, index: any) => {
                            return (
                                <SwiperSlide>
                                    <div className="border text-center hover:shadow-2xl transition ease-in-out duration-500" key={index}>
                                        <div className="overflow-hidden">
                                            <a href={`/products/${product._id}`}><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`${product.img}`} alt="" /></a>
                                        </div>
                                        <div>
                                            <p className="text-center my-2 px-2 overflow-hidden text-ellipsis h-[27px]"><a href={`/products/${product._id}`} className="text-[1.125rem] hover:text-lime-500">{product.name}</a></p>
                                            <p className="text-center text-lime-600 text-lg mb-2">{product.price} đ</p>
                                        </div>
                                        <button data-id="" className="btn-add px-6 py-1 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product