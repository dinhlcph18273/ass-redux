import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="grid grid-cols-5 gap-10 bg-[#252932] text-[#868285] py-12 px-12">
                    <div >
                        <div>
                            <img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" />
                        </div>
                        <div className="py-2 pt-5">
                            <a href=""><i className="fa-solid fa-location-dot text-[#f1f1f1]" /> Số 48,Xã Thọ
                                An,Huyện Đan Phượng,
                                p.Hà Hội</a>
                        </div>
                        <div className="py-2">
                            <a href=""><i className="fa-solid fa-phone text-[#f1f1f1]" /> 0372.0012.08</a>
                        </div>
                        <div className="py-2">
                            <a href=""><i className="fa-solid fa-envelope text-[#f1f1f1]" />
                                dinhlcph18273@fpt.edu.vn</a>
                        </div>
                    </div>
                    <div >
                        <div className="mt-4">
                            <h2 className="text-2xl uppercase text-white">Sản phẩm</h2>
                        </div>
                        <ul className="mt-3">
                            <li className="py-2 hover:text-lime-500"><a href="">Rau củ</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Hải Sản</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Trái Cây</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Đồ uống</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Thịt trứng</a></li>
                        </ul>
                    </div>
                    <div >
                        <div className="mt-4">
                            <h2 className="text-2xl uppercase text-white">Danh mục</h2>
                        </div>
                        <ul className="mt-3">
                            <li className="py-2 hover:text-lime-500"><a href="">Trang Chủ</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Giới thiệu</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Cửa hàng</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Kiến thức</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div >
                        <div className="mt-4">
                            <h2 className="text-2xl uppercase text-white">Dịch Vụ</h2>
                        </div>
                        <ul className="mt-3">
                            <li className="py-2 hover:text-lime-500"><a href="">Rau củ</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Hải Sản</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Trái Cây</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Đồ uống</a></li>
                            <li className="py-2 hover:text-lime-500"><a href="">Thịt trứng</a></li>
                        </ul>
                    </div>
                    <div >
                        <div className="mt-4">
                            <h3 className="text-2xl uppercase text-white">Đăng ký</h3>
                        </div>
                        <div className="mt-3">
                            <p>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</p>
                            <form method="post" className="relative">
                                <input className="py-2 px-6" type="text" placeholder="Email..." />
                                <button><i className="fa fa-paper-plane absolute right-10 top-3 text-lime-500" /></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center py-3 bg-black text-white">
                    Copyright@2022 by Lê Công Định
                </div>
            </footer >
        </div>
    )
}

export default Footer