import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button , Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import resumeActions from '../../actions/resume/resume.action';

import {connect} from 'react-redux';
import { operationTypesEnum } from '../../helpers/operationTypesEnum';

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
        this.updateStore();
    }

    componentWillReceiveProps(){
        this.setState(this.props.state?.resume)
    }

    handleFinish(){
        const { dispatch } = this.props;
        dispatch(resumeActions.addResume(this.state));
    }

    updateStore(){
        const { dispatch } = this.props;
        dispatch(resumeActions.updateStore(this.state));
    }

    render(){
        const resume = this.props?.resume;
        const renderComponent = 
            (this.props.state.operationType == operationTypesEnum.EDIT && resume.resumeId) ?
            true
            : this.props.state.operationType == operationTypesEnum.ADD ? true: false;
        return(renderComponent && 
            <Row gutter={{xs: 8, sm: 16, md: 24, lg:32 }}>
            <Col className="gutter-row centerized-col" span={12}>
                <Form
                onFinish = {this.handleFinish}
                className="personal-data-form"
                initialValues={{
                    remember: true,
                }}
                >
                    <Form.Item onChange ={this.handleChange}
                        name="FirstName"
                        initialValue = {resume?.firstName == null ? "": resume?.firstName}
                        rules={[
                        {
                            required: true,
                            message: 'Please input your first name',
                        },
                        ]}
                    >
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="First name"
                        />
                    </Form.Item>
                    <Form.Item onChange ={this.handleChange}
                        name="LastName"
                        initialValue = {resume?.lastName}
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
                        initialValue = {resume?.email}
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
                        initialValue = {resume?.address}
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
                        initialValue = {resume?.sumUp}
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