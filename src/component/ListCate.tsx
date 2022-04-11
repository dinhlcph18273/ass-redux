import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { listCategory } from '../features/category/categorySlice';
import { Select } from 'antd';
import { sort } from '../features/product/productSlice';

const { Option } = Select;

const ListCate = () => {
    const listcate = useAppSelector((item: any) => item.category.value)
    const dispatch = useAppDispatch();


    function handleChange(value: any) {
        console.log(`selected ${value}`);
        dispatch(sort(value))
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
                <Select defaultValue="all" style={{ width: 240 }} onChange={handleChange}>
                    <Option value="/products">Tất cả</Option>
                    <Option value={`/products?sort=price&order=asc`}>Giá cao đến thấp</Option>
                    <Option value="disabled">Giá thấp đến cao</Option>
                </Select>
            </div>
        </div>
    )
}

export default ListCate