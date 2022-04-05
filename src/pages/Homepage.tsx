import React from 'react'
import Banner from '../component/Banner'
import Header from '../component/Header'
import Product from './Product'

const Homepage = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header />
            </div>

            <Banner />
            <Product />
        </div>
    )
}

export default Homepage