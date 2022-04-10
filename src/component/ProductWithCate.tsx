import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { readProductWithCate } from '../features/product/productSlice'
import ListCate from './ListCate'

const ProductWithCate = () => {
    const product = useAppSelector(item => item.product.value)
    const dispatch = useAppDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(readProductWithCate(id))
    }, [dispatch, id])
    return (
        <div>
            <div className='shadow-md'>
                <div className='max-w-7xl mx-auto mb-10'>
                    <Header />
                </div>
            </div>
            <div className=' max-w-7xl mx-auto mb-10'>
                <h1 className="text-2xl "><span className="opacity-70">Trang chủ</span> / Cửa hàng</h1>
                <div className='flex'>
                    <div>
                        <ListCate />
                    </div>
                    <div className='my-5'>
                        <div className="grid grid-cols-4 gap-8">
                            {product?.map((product: any, index: any) => {
                                return (
                                    <div className="border text-center hover:shadow-2xl transition ease-in-out duration-500" key={index}>
                                        <div className="overflow-hidden">
                                            <Link to={`/products/${product._id}`}><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`${product.img}`} alt="" /></Link>
                                        </div>
                                        <div>
                                            <p className="text-center my-2 px-2 overflow-hidden text-ellipsis h-[27px]"><a href={`/products/${product._id}`} className="text-[1.125rem] hover:text-lime-500">{product.name}</a></p>
                                            <p className="text-center text-lime-600 text-lg mb-2">{product.price} đ</p>
                                        </div>
                                        <button data-id="" className="btn-add px-6 py-1 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductWithCate