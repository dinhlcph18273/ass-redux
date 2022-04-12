import React from 'react'
import Header from '../component/Header';
import { getTotalPrice } from '../utils/localStorage';

const CheckOut = () => {
    let cart: any = "";
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart") as string);
    }
    const { user } = JSON.parse(localStorage.getItem("user") as string);
    cart = cart.filter((item: any) => item.user === user._id);
    return (
        <div>
            <div className='shadow-md'>
                <div className='max-w-7xl mx-auto mb-10'>
                    <Header />
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-20 ">
                <form className="flex" id="form-checkout">
                    <div className="w-[700px] border-t-2">
                        <h2 className="text-xl font-semibold py-5">THÔNG TIN THANH TOÁN</h2>
                        <p className="py-3" >
                            <label className="font-semibold">Họ Tên *</label><br />
                            <span >
                                <input type="text" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="name" id="name1" placeholder="Họ tên..." />
                            </span>
                        </p>
                        <p className="py-3" >
                            <label className="font-semibold">Địa chỉ *</label><br />
                            <span >
                                <input type="text" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="address" id="address" placeholder="Địa chỉ..." />
                            </span>
                        </p>
                        <p className="py-3" >
                            <label className="font-semibold">Số điện thoại *</label><br />
                            <span >
                                <input type="text" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="phone" id="phone" placeholder="SĐT..." />
                            </span>
                        </p>
                        <p className="py-3" >
                            <label className="font-semibold">Email *</label><br />
                            <span >
                                <input type="text" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-2 pl-2" name="email" id="email" placeholder="Email..." />
                            </span>
                        </p>
                        <p className="py-3" >
                            <label className="font-semibold">Ghi chú đơn hàng (Tùy chọn) *</label><br />
                            <span >
                                <textarea className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 border py-4 pl-2" id="note" placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn." rows={2} cols={5} defaultValue={""} />
                            </span>
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
                        <button type="submit" className="py-2 px-5 mt-5 bg-orange-500 hover:bg-orange-600 text-white">Đặt hàng</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CheckOut