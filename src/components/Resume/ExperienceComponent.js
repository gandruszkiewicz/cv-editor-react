import React, { Component } from 'react';
import { Form, Input, Button , Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export class ExperienceComponent extends Component {

    render(){
        return(
            <Form>
                <Row>
                    <Col>
                        <Form.Item
                                name="CompanyName"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input company name',
                                },
                                ]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="Company name"
                                />
                            </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                                name="City"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input city name',
                                },
                                ]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="City"
                                />
                            </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default ExperienceComponent;