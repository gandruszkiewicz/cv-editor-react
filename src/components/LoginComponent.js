import React, { Component } from 'react';
import { Form, Input, Button,Checkbox , Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {authenticationService} from '../services/authentication.service';



class LoginComponent extends Component {
    state = {
        email: '',
        password: '',
    }


    onFinish = (e) => {
        authenticationService.login(this.state.email, this.state.password)
            .then(result =>{
                if(result){
                    this.props.history.push("/");
                }
            });
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state);
    }

    render(){
        return(
        <Row style={{'margin-top': '15%'}}>
                <Col className='login-col'>
                    <Form
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    >
                        <Form.Item onChange ={this.handleChange}
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item onChange ={this.handleChange}
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
          </Row>
        )
    }
}
export default LoginComponent;