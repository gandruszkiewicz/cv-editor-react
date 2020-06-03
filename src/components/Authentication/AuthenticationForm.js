import React, { Component } from 'react';
import { Form, Input, Button,Checkbox , Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {Link} from 'react-router-dom';



export class AuthenticationForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render(){
        return(
        <Row style={{'margin-top': '15%'}}>
                <Col className='centerized-col'>
                    <Form
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish = {this.props.onFinish}
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
                        <Form.Item style ={{"display": this.props.loginSection}}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            {this.props.submitButtonValue}
                            </Button>
                            <div style={{ "visibility":this.props.displayRegister }}>
                                 
                                <Link to="/register">register now!</Link>
                            </div>
                            
                        </Form.Item>
                    </Form>
                </Col>
        </Row>
        )
    }
}
export default AuthenticationForm;