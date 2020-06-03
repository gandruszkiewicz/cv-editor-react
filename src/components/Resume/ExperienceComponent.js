import React, { Component } from 'react';
import { Form, Input, Checkbox , Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';
import RichEditorComponent from '../RichEditorComponent';

export class ExperienceComponent extends Component {
    constructor(props){
        super(props);
        this.handleCurrentDateTo = 
            this.handleCurrentDateTo.bind(this);
    }
    state = {
        isCurrentWork: false
    }

    handleCurrentDateTo(){
        this.setState({
            isCurrentWork : !this.state.isCurrentWork
        });
    }
    render(){
        const monthFormat = 'YYYY/MM';
        return(
            <div>
                <Form>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6} offset ={2}>
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
                        <Col className="gutter-row" span={6} offset={8}>
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
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12} offset ={2}>
                            <Form.Item
                                    name="Position"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input position name',
                                    },
                                    ]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className="site-form-item-icon" />} 
                                        placeholder="Position name"
                                    />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6} offset ={2}>
                            <Form.Item
                                    name="DateFrom"
                                    
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input start date',
                                    },
                                    ]}
                                >
                                <DatePicker placeholder = 'Date from' format={monthFormat} picker="month" />
                            </Form.Item>
                        </Col>
                        {!this.state.isCurrentWork &&
                            <Col className="gutter-row" span={6} offset ={0}>
                                <Form.Item
                                        name="DateTo"
                                        
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input end date',
                                        },
                                        ]}
                                    >
                                    <DatePicker placeholder = 'Date to' format={monthFormat} picker="month" />
                                </Form.Item>
                            </Col>
                        }
                        <Col className="gutter-row" span={6} offset ={0}>
                            <Checkbox onChange={this.handleCurrentDateTo}>Current</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span = {2}>
                        <Col className="gutter-row" span={20} offset ={2}>
                            <Form.Item
                                    name="Position"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input position name',
                                    },
                                    ]}
                                >
                                <RichEditorComponent/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default ExperienceComponent;