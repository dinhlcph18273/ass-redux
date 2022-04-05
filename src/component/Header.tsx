import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="p-2 flex justify-between items-center">
                <ul className="flex">
                    <li className="inline-block border-r px-3">
                        <a href=""><i className="fa-solid fa-envelope opacity-50 mr-1.5" />dinhlcph18273@fpt.edu.vn</a>
                    </li>
                    <li className="inline-block px-3">
                        <a href=""><i className="fa-solid fa-phone opacity-50 mr-1.5" />0372011308</a>
                    </li>
                </ul>
                <ul className="flex"><li><a className="block px-4  hover:rounded hover:text-white hover:bg-sky-400" href="/signup">Signup</a></li>
                    <li><a className="block px-4  hover:rounded hover:text-white hover:bg-sky-400" href="/signin">Signin</a></li>
                </ul>
            </div>

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
                    Cart / <a href="/#/carts"><i className="fa-solid fa-cart-shopping text-lg opacity-80" /><span className="absolute top-0 text-red-500" id="quantityCart" /></a>
                </button>
            </div>
        </div>
    )
}

export default Header