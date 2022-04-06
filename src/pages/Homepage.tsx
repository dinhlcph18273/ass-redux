import React from 'react'
import Banner from '../component/Banner'
import Cate from '../component/Cate'
import Header from '../component/Header'
import ListPost from '../features/post/pages/ListPost'
import Product from './Product'

const Homepage = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header />
            </div>
            <Banner />
            <div className='max-w-7xl mx-auto'>
                <Cate />
                <h1 className="text-3xl capitalize text-center my-10 normal">Sản phẩm nổi bật</h1>
                <Product />
                <ListPost />
            </div>
        </div>
    )
}

export default Homepage