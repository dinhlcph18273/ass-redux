import React from 'react'
import { Form, Input, Button, Checkbox, Select, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { addProducts } from '../productSlice';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Addproduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(addProducts(values))
        navigate("/admin/products")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {

                            required: true,
                            message: 'Please input your price!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="img"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your image!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your category!',
                        },
                    ]}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,

                    }}
                >
                    <Select >
                        <Option value="6242e1e4163be05a4ba3ab90">Rau củ</Option>
                        <Option value="6242e1e7163be05a4ba3ab92">Hải Sản</Option>
                        <Option value="6242e577e5d985aa3392365f">Trái cây</Option>
                        <Option value="6242f007e5d985aa33923696">Thịt Trứng</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your status!',
                        },
                    ]}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,

                    }}
                >
                    <Select >
                        <Option value="còn hàng">Còn hàng</Option>
                        <Option value="hết hàng">Hết hàng</Option>

                    </Select>
                </Form.Item>
                <Form.Item
                    label="Desc"
                    name="desc"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your desc!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" className='submit-to' htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Addproduct