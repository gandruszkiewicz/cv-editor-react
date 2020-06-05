import React, { Component } from 'react';
import { Form, Input, Checkbox , Row, Col, DatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import RichEditorComponent from '../RichEditorComponent';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { connect } from 'react-redux';

export class ExperienceComponent extends Component {
    constructor(props){
        super(props);
        this.handleCurrentDateTo = 
            this.handleCurrentDateTo.bind(this);
        this.handleChange = 
            this.handleChange.bind(this);
        this.handleDescriptionChange = 
            this.handleDescriptionChange.bind(this);
    }
    state = {
        isCurrentWork: false,
        experience: this.props.state.experience
    }

    handleCurrentDateTo(){
        this.setState({
            isCurrentWork : !this.state.isCurrentWork
        });
    }

    handleChange(e){
        this.setState({
            experience: {
                ...this.state.experience,
                [e.target.id]: e.target.value
            }
        })
    }

    handleDateToChange = (date) =>{
        this.handleDateChange("DateTo",date)
    }

    handleDateFromChange = (date) =>{
        this.handleDateChange("DateFrom",date)
    }

    handleDateChange(propertyName, date){
        this.setState({
            experience: {
                ...this.state.experience,
                [propertyName]: date.format('YYYY/MM')
            }
        })
    }

    handleDescriptionChange(value){
        this.setState({
            experience: {
                ...this.state.experience,
                'description': value
            }
        })
        console.log(this.state);
    }

    render(){
        const monthFormat = 'YYYY/MM';
        return(
            <div>
                <Form>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6} offset ={2}>
                            <Form.Item
                                    onChange = {this.handleChange}
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
                        <Col className="gutter-row" span={6} offset={6}>
                            <Form.Item
                                    onChange = {this.handleChange}
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
                                    onChange = {this.handleChange}
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
                                <DatePicker onChange = {this.handleDateFromChange} placeholder = 'Date from' format={monthFormat} picker="month" />
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
                                    <DatePicker id ="DateTo" onChange = {this.handleDateToChange} value = {this.state.experience.DateTo} placeholder = 'Date to' format={monthFormat} picker="month" />
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
                                    onChange = {this.handleChange}
                                    name="Description"
                                    rules={[
                                    {
                                        required: false,
                                        message: 'Please input description',
                                    },
                                    ]}
                                >
                                <RichEditorComponent name = "Description" handleDescriptionChange = {this.handleDescriptionChange}/>      
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

export default connect(mapStateToProps)(ExperienceComponent);