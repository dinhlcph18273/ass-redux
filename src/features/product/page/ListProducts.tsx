import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, removeProducts } from '../productSlice';
import { Button, Row, Table, Image } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteFilled } from "@ant-design/icons"



const ListProducts = () => {
    const products = useSelector((data: any) => data.product.value);
    const dispatch = useDispatch();
    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: any) => <h3>{text}</h3>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Img',
            dataIndex: 'img',
            render: (text: any) => <Image
                width={200}
                height={200}
                src={text}

            />,
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id: any) => (
                <Row>
                    <Link to={`/admin/products/${id}/edit`}>
                        <Button type="primary" icon={<EditOutlined />}></Button>
                    </Link>
                    <Button type="primary" danger icon={<DeleteFilled />} onClick={() => {
                        const confirm = window.confirm("muốn xóa không?")
                        if (confirm) {
                            dispatch(removeProducts(id))
                        }
                    }}>
                    </Button>
                </Row>
            )
        },
    ];
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            <Row>
                <Link to="/admin/products/add">
                    <Button>Add</Button>
                </Link>
            </Row>
            <Table
                columns={columns}
                dataSource={products}
            />
        </div>
    )
}

export default ListProducts