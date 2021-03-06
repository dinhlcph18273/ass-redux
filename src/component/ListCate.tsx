import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { listCategory } from '../features/category/categorySlice';
import { Button } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { sortBy } from '../features/product/productSlice';


const ListCate = () => {
    const listcate = useAppSelector((item: any) => item.category.value)
    const dispatch = useAppDispatch();
    const sortByPrice = (order: string) => {
        dispatch(sortBy(order))
    }
    useEffect(() => {
        dispatch(listCategory())
    }, [dispatch])
    return (
        <div>
            <aside id="nav_menu-2" className="w-[280px] mt-3">
                <span className="text-[23px] text-white bg-lime-500 py-4 pl-3 pr-10 rounded-t-lg">Danh mục sản phẩm</span>
                <div className="mt-3">
                    <ul id="menu-danh-muc-san-pham-vertical-menu" className="w-[260px]">
                        {listcate?.map((item: any, index: any) => {
                            return (
                                <li id="menu-item-705" className="py-3 pl-2 hover:bg-lime-500 hover:text-white hover:rounded" key={index} >
                                    <button className="btn-category"><Link to={`/category/${item._id}`}>{item.name}</Link></button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </aside >
            <div className='mt-5'>
                <Button onClick={() => sortByPrice("desc")} icon={<ArrowDownOutlined />} style={{ border: "none" }}></Button>
                <Button onClick={() => sortByPrice("asc")} icon={<ArrowUpOutlined />} style={{ border: "none" }}></Button>
            </div>
        </div>
    )
}

export default ListCate