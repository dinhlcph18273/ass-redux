import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { readProduct } from '../features/product/productSlice';


const ProductDetail = () => {
    const product = useSelector((data: any) => data.product.valueOne)
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(readProduct(id))
    }, [dispatch, id])
    return (
        <div>
            {product?.name}
        </div>
    )
}

export default ProductDetail