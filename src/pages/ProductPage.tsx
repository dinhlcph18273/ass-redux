import React from 'react'
import Header from '../component/Header'
import ListCate from '../component/ListCate'
import SlideProduct from '../component/SlideProduct'
import Products from './Products'

const ProductPage = () => {
    return (
        <div>
            <div className='shadow-md'>
                <div className=' max-w-7xl mx-auto mb-10'>
                    <Header />
                </div>
            </div>
            <div className=' max-w-7xl mx-auto mb-10'>
                <h1 className="text-2xl "><span className="opacity-70">Trang chủ</span> / Cửa hàng</h1>
                <SlideProduct />
                <div className='flex'>
                    <div>
                        <ListCate />
                    </div>
                    <div className=''>
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage