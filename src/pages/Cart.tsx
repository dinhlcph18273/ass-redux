import React from 'react'
import Header from '../component/Header'
import { getTotalPrice, isAuthenticate, removeItemFromCart } from '../utils/localStorage';
import { Button, Row, Table, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    let cart: any = [];
    if (localStorage.getItem("cart")) {
        cart = isAuthenticate("cart")
    }
    const { user } = isAuthenticate("user")
    cart = cart.filter((item: any) => item.user === user._id)
    const navigate = useNavigate()
    const remove = (id: any) => {
        removeItemFromCart(id, () => {
            navigate('/cart')
        })
    }
    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: any) => <h3>{text}</h3>,
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
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id: any) => (
                <Row>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => {
                        remove(id)
                    }}>
                    </Button>
                </Row>
            )
        },
    ];
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header />
            </div>
            <div>
                <Table
                    columns={columns}
                    dataSource={cart}
                    footer={() => `Total: ${getTotalPrice()}`}
                />
            </div>
            <Button onClick={() => { navigate('/checkout') }} className="my-3 bg-sky-500 text-white hover:bg-sky-600">CheckOut</Button>
        </div>
    )
}

export default Cart