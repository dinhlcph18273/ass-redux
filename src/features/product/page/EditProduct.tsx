import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, Select, InputNumber } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { readProduct, updateProducts } from '../productSlice';
const { Option } = Select;

const EditProduct = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams();
    const [form] = Form.useForm()
    const navigate = useNavigate()
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { payload } = await dispatch(readProduct(id))
                form.setFieldsValue(payload)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [dispatch, form, id])
    const onFinish = (product: any) => {
        dispatch(updateProducts({ id, ...product }));
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
                form={form}
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
                        <Option value="6242e1e4163be05a4ba3ab90">Rau c???</Option>
                        <Option value="6242e1e7163be05a4ba3ab92">H???i S???n</Option>
                        <Option value="6242e577e5d985aa3392365f">Tr??i c??y</Option>
                        <Option value="6242f007e5d985aa33923696">Th???t Tr???ng</Option>
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
                        <Option value="c??n h??ng">C??n h??ng</Option>
                        <Option value="h???t h??ng">H???t h??ng</Option>

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

export default EditProduct