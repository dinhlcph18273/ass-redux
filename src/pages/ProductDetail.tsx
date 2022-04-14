import { CheckSquareOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import { readProduct } from '../features/product/productSlice';
import { addToCart, isAuthenticate } from '../utils/localStorage';
import { Form, InputNumber, notification } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const ProductDetail = () => {
    const product = useSelector((data: any) => data.product.value)
    const dispatch = useDispatch();
    const { id } = useParams()

    const onFinish = (values: any) => {
        const { user } = isAuthenticate("user")

        addToCart({
            ...product,
            quantity: values.quantity ? +values.quantity : 1,
            user: user._id,
        }, () => {
            notification.success({
                message: "Thêm thành công"
            })
        })
    };
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
                            <Form {...layout} name="nest-messages" onFinish={onFinish}>
                                <div className='mt-3'>
                                    <p className="text-lg">Số lượng</p>
                                    <Form.Item
                                        name="quantity"
                                    >
                                        <InputNumber />
                                    </Form.Item>
                                </div>
                                <button className="px-8 py-2 bg-lime-500 text-white hover:bg-lime-600 my-3">Add Cart</button>
                            </Form>
                            <p className="py-4">{product?.desc}</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail