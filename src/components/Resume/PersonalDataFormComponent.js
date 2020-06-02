import React, { Component } from 'react';
import { Form, Input, Button,Checkbox , Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import resumeActions from '../../actions/resume/resume.action';

import {connect} from 'react-redux';



export class PersonalDataFormComponent extends Component {
    constructor(props){
        super(props);
        this.handleFinish = this.handleFinish.bind(this);
    }
    state = this.props.state.resume;

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state);
    }

    handleFinish(){
        console.log(this.props);
        const { dispatch } = this.props;
        dispatch(resumeActions.addResume(this.state));
    }

    render(){
        return(
        <Row>
                <Col className='login-col'>
                    <Form
                    onFinish = {this.handleFinish}
                    className="personal-data-form"
                    initialValues={{
                        remember: true,
                    }}
                    >
                        <Form.Item onChange ={this.handleChange}
                            name="FirstName"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your first name',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
                        </Form.Item>
                        <Form.Item onChange ={this.handleChange}
                            name="LastName"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your last name',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="last name"
                            />
                        </Form.Item>
                        <Form.Item onChange ={this.handleChange}
                            name="Email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="email"
                            placeholder="email"
                            />
                        </Form.Item>
                        <Form.Item onChange ={this.handleChange}
                            name="Address"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your address',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="Address"
                            />
                        </Form.Item>

                        <Form.Item onChange ={this.handleChange}
                            name="SumUp"
                            rules={[
                            {
                                required: false
                            },
                            ]}
                        >
                            <Input.TextArea
                            rows = {4}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="SumUp"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
        </Row>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

export default connect(mapStateToProps)(PersonalDataFormComponent);