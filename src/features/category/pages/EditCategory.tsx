import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useAppDispatch } from '../../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { editCategory, readCategory } from '../categorySlice';

const EditCategory = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const [form] = Form.useForm()
    const navigate = useNavigate()
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { payload: { category } } = await dispatch(readCategory(id))
                form.setFieldsValue(category)
            } catch (error) {
                console.log(error);
            }
        }
        getCategory()
    }, [dispatch, form, id])
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(editCategory({ id, ...values }))
        navigate("/admin/category")
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

export default EditCategory