import React from 'react'
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';


const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        dispatch(createUser(values))
        notification.success({
            message: "Đăng ký thành công"
        })
        navigate('/signin')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="bg-[url('https://res.cloudinary.com/dinhlcph18273/image/upload/v1645244628/nam_van_chi_2_n5a79k.jpg')]">
            <div className='text-white'>
                <Header />
            </div>
            <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8 border p-10 rounded-lg bg-white'>
                    <div>
                        <img className="mx-auto h-12 w-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign up to your account
                        </h2>
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 13 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Username' />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }, { type: 'email' }]}
                        >
                            <Input prefix={< MailOutlined className="site-form-item-icon" />} placeholder='Email' />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>


                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 10, span: 13 }}>
                            <Button type="primary" className='submit-to' htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup