import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticate, Signout } from '../utils/localStorage'
import { Input } from 'antd';
import { useAppDispatch } from '../app/hooks'
import { SearchProducts } from '../features/product/productSlice'
const { Search } = Input;

const Header = () => {
    const isSignin = isAuthenticate("user");
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const onSearch = (value: any) => {
        dispatch(SearchProducts({ value: value }))
    }
    const SignOut = () => {
        Signout("user");
        navigate("/")
    }
    return (
        <div>
            <div className="p-2 flex justify-between items-center">
                <ul className="flex">
                    <li className="inline-block border-r px-3">
                        <Link to=""><i className="fa-solid fa-envelope opacity-50 mr-1.5" />dinhlcph18273@fpt.edu.vn</Link>
                    </li>
                    <li className="inline-block px-3">
                        <Link to=""><i className="fa-solid fa-phone opacity-50 mr-1.5" />0372011308</Link>
                    </li>
                </ul>
                {isSignin ? (
                    <ul className="flex">
                        <Button type="dashed" onClick={SignOut}>
                            Log-out
                        </Button>
                    </ul>
                ) : (
                    <ul className="flex">
                        <li><Button type="dashed" className='hover:rounded hover:text-white hover:bg-sky-400'><Link className="block px-4 " to="/signin">Signin</Link></Button></li>
                        <li><Button type="dashed" className='hover:rounded hover:text-white hover:bg-sky-400'><Link className="block px-4  " to="/signup">Signup</Link></Button></li>
                    </ul>
                )}
            </div>

            <div className=" p-4 flex items-center ">
                <Link to="/" className='mr-2'><img src="https://theme.hstatic.net/1000333483/1000450410/14/logo.png?v=1943" width="300px" height="100px" alt="" /></Link>
                <ul className="flex">
                    <li><Link className="block p-2 py-2 bg-lime-600 rounded text-white rounded text-lg " to="/">Home page</Link></li>
                    <li><Link className="block p-2 py-2 text-[#989898] hover:text-white hover:rounded hover:bg-lime-600 text-lg " to="/about">About page</Link></li>
                    <li><Link className="block p-2 py-2 text-[#989898] hover:text-white hover:rounded hover:bg-lime-600 text-lg " to="/products">Product page</Link></li>
                    <li><Link className="block p-2 py-2 text-[#989898] hover:text-white hover:rounded hover:bg-lime-600 text-lg " to="/admin">Dashboard page</Link></li>
                </ul>
                <form id="search" className="pr-2 ml-20 relative">
                    <Search onSearch={onSearch} placeholder="Search..." />
                    <button className="absolute right-5"><i className="fa-solid fa-magnifying-glass" /></button>
                </form>
                <button className="ml-20 text-lg relative">
                    Cart / <a href="/#/carts"><ShoppingCartOutlined /><span className="absolute top-0 text-red-500" id="quantityCart" /></a>
                </button>
            </div>
        </div>
    )
}

export default Header