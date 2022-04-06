import React from 'react'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='absolute top-[40%] left-[30%]'>
                <h2 className='text-5xl text-white uppercase name '>Tìm mua <strong>thực phẩm sạch</strong> từ <br />

                    <strong>nhà cung cấp uy tín</strong> tại đây</h2>

                <button className='text-white rounded py-2 px-5 mt-3 bg-lime-600 hover:bg-lime-700 ml-[290px]'><a href="/products">Mua hàng</a></button>
            </div >
        </div>
    )
}

export default Banner