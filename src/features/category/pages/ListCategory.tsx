import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { Button, Row, Table, Image } from 'antd';
import { listCategory, removeCategory } from '../categorySlice';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const ListCategory = () => {
    const category = useAppSelector(data => data.category.value)
    const dispatch = useAppDispatch()
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
            title: 'Action',
            dataIndex: '_id',
            render: (id: any) => (
                <Row>
                    <Link className='edit-to' to={`/admin/category/${id}/edit`}>
                        <Button type="primary" icon={<EditOutlined />}></Button>
                    </Link>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => {
                        const confirm = window.confirm("muốn xóa không?")
                        if (confirm) {
                            dispatch(removeCategory(id))
                        }
                    }}>
                    </Button>
                </Row>
            )
        },
    ];
    useEffect(() => {
        dispatch(listCategory())
    }, [dispatch])
    return (
        <div>
            <Row>
                <Link to="/admin/category/add">
                    <Button type='primary' className='submit-to' > Add </Button>
                </Link>
            </Row>
            <Table
                columns={columns}
                dataSource={category}
            />
        </div>
    )
}

export default ListCategory