import React, { Component } from 'react';
import { Form, Input, Checkbox , Row, Col, DatePicker, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import moment from 'moment';
import qualificationActions from '../../actions/qualification/qualification.action';

export class QualificationComponent extends Component {
    constructor(props){
        super(props);
        this.handleCurrentDateTo = 
            this.handleCurrentDateTo.bind(this);
        this.handleChange = 
            this.handleChange.bind(this);

        this.handleFinish = this.handleFinish.bind(this);
    }
    state = {
        isCurrentSchool: false,
        qualification: this.props.data
    }

    handleCurrentDateTo(){
        this.setState({
            isCurrentSchool : !this.state.isCurrentSchool
        });
    }

    handleChange(e){
        this.setState({
            qualification: {
                ...this.state.qualification,
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
            qualification: {
                ...this.state.qualification,
                [propertyName]: date.format('YYYY/MM')
            }
        })
    }

    handleFinish(e){
        console.log(e);
        const { dispatch } = this.props;
        
        var qualification = () =>{
            return {
                ...this.state.qualification,
                DateTo: moment(this.state.qualification.DateTo),
                DateFrom: moment(this.state.qualification.DateFrom),
                ResumeId: this.props.state.resume.ResumeId
            }
        }
        dispatch(qualificationActions
            .addQualification(qualification()));

        dispatch(qualificationActions
            .updateStore(qualification()));
    }

    render(){
        const monthFormat = 'YYYY/MM';
        const qualification = this.state.qualification;
        const dateFrom = qualification ? moment(qualification.DateFrom) : null;
        const dateTo = qualification ? moment(qualification.DateTo) : null;
        return(
            <div>
                <Form onFinish ={this.handleFinish}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6} offset ={2}>
                            <Form.Item
                                    onChange = {this.handleChange}
                                    name="SchoolName"
                                    initialValue = {qualification?.SchoolName}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input school name',
                                    },
                                    ]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className="site-form-item-icon" />} 
                                        placeholder="School name"
                                    />
                                </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6} offset={6}>
                            <Form.Item
                                    onChange = {this.handleChange}
                                    name="City"
                                    initialValue = {qualification?.City}
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
                                    name="AcademicDegree"
                                    initialValue = {qualification?.AcademicDegree}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input academic degree',
                                    },
                                    ]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className="site-form-item-icon" />} 
                                        placeholder="Academic degree"
                                    />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12} offset ={2}>
                            <Form.Item
                                    onChange = {this.handleChange}
                                    name="FieldOfStudy"
                                    initialValue = {qualification?.FieldOfStudy}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input field of study',
                                    },
                                    ]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className="site-form-item-icon" />} 
                                        placeholder="Field of study"
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
                                <DatePicker 
                                    defaultValue = {dateFrom} 
                                    onChange = {this.handleDateFromChange} 
                                    placeholder = 'Date from' 
                                    format={monthFormat} 
                                    picker="month" />
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
                                    <DatePicker 
                                        defaultValue = {dateTo} 
                                        onChange = {this.handleDateToChange} 
                                        placeholder = 'Date to' 
                                        format={monthFormat} 
                                        picker="month" />
                                </Form.Item>
                            </Col>
                        }
                        <Col className="gutter-row" span={6} offset ={0}>
                            <Checkbox onChange={this.handleCurrentDateTo}>Current</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span = {2}>
                        <Col className="gutter-row" span={20} offset ={2}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                Save
                                </Button>
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

export default connect(mapStateToProps)(QualificationComponent);