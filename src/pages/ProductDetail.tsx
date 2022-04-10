import { CheckSquareOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import { readProduct } from '../features/product/productSlice';


const ProductDetail = () => {
    const product = useSelector((data: any) => data.product.value)
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(readProduct(id))
    }, [dispatch, id])
    return (
        <div>
            <div className='shadow-md'>
                <div className='max-w-7xl mx-auto mb-10'>
                    <Header />
                </div>
            </div>
            <div className='py-5'>
                <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="mb-10">
                        <img className="w-[600px] h-[600px] mx-auto" src={`${product?.img}`} alt="" />
                    </div>
                    <div >
                        <p className="opacity-60 pb-5">TRANG CHỦ / SẢN PHẨM</p>
                        <h1 className="text-3xl font-semibold">{product?.name}</h1>
                        <p className="text-2xl font-semibold text-lime-500 py-5">{product?.price}đ</p>
                        <div >
                            <p className="py-2 text-lg"><CheckSquareOutlined /> Gọi mua hàng 1900 636 648</p>
                            <p className="py-2 text-lg"><CheckSquareOutlined /> Đảm bảo tươi ngon</p>
                            <p className="py-2 text-lg"><CheckSquareOutlined /> Giao hàng trực tiếp từ vườn</p>
                            <p className="py-2 text-lg"><CheckSquareOutlined /> Đổi trả trong vòng 24h</p>
                            <p className="text-xl text-lime-500 capitalize">{product?.status}</p>
                            <div>
                                <p className="text-lg">Số lượng</p>
                                <input type="number" id="inputValue" className="border border-gray-500" />
                            </div>
                            <p className="py-4">{product?.desc}</p>
                            <button id="btnAddToCart" className="px-8 py-2 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail