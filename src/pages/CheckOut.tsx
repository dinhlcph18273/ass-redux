import React from 'react'
import Header from '../component/Header';
import { Form, Input, Button, InputNumber } from 'antd';
import { getTotalPrice } from '../utils/localStorage';
import { useAppDispatch } from '../app/hooks';

const CheckOut = () => {
    let cart: any = "";
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart") as string);
    }
    const { user } = JSON.parse(localStorage.getItem("user") as string);
    cart = cart.filter((item: any) => item.user === user._id);
    const dispatch = useAppDispatch()
    const onFinish = (values: any) => {
        console.log(values)

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className='shadow-md'>
                <div className='max-w-7xl mx-auto mb-10'>
                    <Header />
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-20 ">
                <Form name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="flex" id="form-checkout">
                    <div className="w-[700px] border-t-2">
                        <h2 className="text-xl font-semibold py-5">THÔNG TIN THANH TOÁN</h2>
                        <p className="py-3" >
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </p>
                        <p className="py-3" >
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </p>
                        <p className="py-3" >
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    {

                                        required: true,
                                        message: 'Please input your phone!',
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                        </p>
                        <p className="py-3" >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }, { type: 'email' }]}
                            >
                                <Input placeholder='Email' />
                            </Form.Item>
                        </p>
                        <p className="py-3" >
                            <Form.Item
                                label="Note"
                                name="note"
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </p>
                    </div>
                    <div className="w-[500px] border-2 border-lime-500 ml-10 py-5 px-10">
                        <h2 className="text-xl font-semibold my-5">Đơn hàng của bạn</h2>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2">
                                    <th className="text-left text-lg">Sản Phẩm</th>
                                    <th className=" text-lg text-right">Tổng</th>
                                </tr>
                            </thead>
                            {cart?.map((item: any) => (
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-1 opacity-70 py-2">{item.name} x {item.quantity}</td>
                                        <td className="text-lime-500 py-2 text-right">{item.price} đ</td>
                                    </tr>
                                </tbody>
                            ))}
                            <tfoot>
                                <tr className="border-b">
                                    <th className="text-left py-2">Tổng phụ</th>
                                    <td className="text-right py-2"><span className="text-lime-500">{getTotalPrice()} đ</span></td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left py-2">Giao hàng</th>
                                    <td className="text-right py-2"><span>Giao hàng miễn phí</span></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th className="text-left py-2">Tổng</th>
                                    <td className="text-right py-2"><span className="text-lime-500" id="total">{getTotalPrice()} đ</span></td>
                                </tr>
                            </tfoot>
                        </table>
                        <p className="pt-5">Người nhận: {user.email}</p>
                        <Form.Item wrapperCol={{ offset: 10, span: 13 }}>
                            <Button type="primary" className='submit-to mt-3' htmlType="submit">
                                Đặt hàng
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default CheckOut