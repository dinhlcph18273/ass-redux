import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className=" p-2 flex items-center ">
            <a href="/#"><img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" width="300px" height="100px" alt="" /></a>
            <ul className="flex">
                <li><Link className="block p-2 py-3 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" to="/about">About page</Link></li>
                <li><Link className="block p-2 py-3 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" to="/">Home page</Link></li>
                <li><Link className="block p-2 py-3 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" to="/products">Product page</Link></li>
                <li><Link className="block p-2 py-3 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" to="/admin">Dashboard page</Link></li>
            </ul>
            <form id="search" className="pr-2 ml-20 relative">
                <input type="text" id="name" className="border border-black rounded-xl px-3" placeholder="Search..." />
                <button className="absolute right-5"><i className="fa-solid fa-magnifying-glass" /></button>
            </form>
            <button className="ml-20 text-lg relative">
                Cart / <a href="/#/carts"><ShoppingCartOutlined /><span className="absolute top-0 text-red-500" id="quantityCart" /></a>
            </button>
        </div>
    )
}

export default Menu