import React, { useState } from 'react';
import { Input, Form, Button, Divider } from 'antd';
import { UserOutlined, GoogleSquareFilled, FacebookFilled, CodepenSquareFilled, LinkedinFilled } from '@ant-design/icons';

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (value) => {
        console.log(value);
    }
    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${require("./1.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    padding: "50px"
                }}>
                    <h2 style={{ display: "flex", justifyContent: "center" }}>Login Form</h2>
                    <Form
                        name="trigger"
                        style={{ maxWidth: 600 }}
                        layout="vertical"
                        onFinish={handleSubmit}
                        autoComplete="on">
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='Email' prefix={<UserOutlined />} value={email} onChange={emailHandler} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder='Password' value={password} onChange={passwordHandler} />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider style={{ borderColor: "black" }}>or Login with  </Divider>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <GoogleSquareFilled style={{ fontSize: '24px' }} />
                        <FacebookFilled style={{ fontSize: '24px' }} />
                        <CodepenSquareFilled style={{ fontSize: '24px' }} />
                        <LinkedinFilled style={{ fontSize: '24px' }} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
