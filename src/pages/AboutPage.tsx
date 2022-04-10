import React from 'react'
import Header from '../component/Header'
import ListPost from '../features/post/pages/ListPost'

const AboutPage = () => {
    return (

        <div>
            <div className='max-w-7xl mx-auto mb-10'>
                <Header />
            </div>
            <h2 className='text-4xl text-center my-5'>  AboutPage</h2>
            <div className='max-w-7xl mx-auto mb-10'>
                <ListPost />
            </div>
        </div>
    )
}

export default AboutPage