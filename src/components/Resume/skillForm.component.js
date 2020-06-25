import React, { Component } from 'react';
import { Form, Input, Checkbox , Row, Col, DatePicker, Button, Rate } from 'antd';
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';


import skillActions from '../../actions/skill/skill.action';
import { Skill } from '../../model/skill'

export class SkillFormComponent extends Component {
    constructor(props){
        super(props);
        this.handleChange = 
            this.handleChange.bind(this);

        this.handleFinish = this.handleFinish.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);

        var stateInit = {
            skill: !this.props.data 
                            ? this.props.state.skill[this.props.id] 
                            : this.props.data
        }
        this.state = stateInit ? stateInit : new Skill();
    }
    state = {

    };

    handleChange(e){
        this.setState({
            skill: {
                ...this.state.skill,
                [e.target.id]: e.target.value
            }
        })
    }

    handleSkillLevelChange(value){
        console.log(value);
        this.setState({
            skill: {
                ...this.state.skill,
                SkillLevel: value
            }
        })
    }

    handleFinish(e){
        const { dispatch } = this.props;
        var skill = () =>{
            return {
                ...this.state.skill,
                ResumeId: this.props.state.resume.ResumeId
            }
        }
        dispatch(skillActions
            .addSkill(skill()));

        dispatch(skillActions
            .updateStore(skill()));
    }

    handleDelete(e){
        const {dispatch} = this.props;
        if(this.state.skill){
            var skillId = 
                this.props.state
                    .skill[this.props.id].Id;
            dispatch(
                skillActions
                .deleteSkill(skillId));
        }

        this.props.handleDelete(e);
    }

    render(){
        const skill = this.state.skill;
        return(
            <div>
                <Form onFinish ={this.handleFinish}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6} offset ={2}>
                            <Form.Item
                                    onChange = {this.handleChange}
                                    name="Name"
                                    initialValue = {skill?.name}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input name',
                                    },
                                    ]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className="site-form-item-icon" />} 
                                        placeholder="Skill name"
                                    />
                                </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6} offset={6}>
                            <Form.Item
                                    name="SkillLevel"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Choose skill level',
                                    },
                                    ]}
                                >
                                    <Rate defaultValue = {skill?.skillLevel} count = {3} onChange = {this.handleSkillLevelChange}/>
                                    
                                </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12} offset ={2}>
                            <Form.Item
                                    onChange = {this.handleChange}
                                    name="Description"
                                    initialValue = {skill?.description}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please describe shortly your skill',
                                    },
                                    ]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className="site-form-item-icon" />} 
                                        placeholder="Description"
                                    />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span = {2}>
                        <Col className="gutter-row" span={20} offset ={2}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Save
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Col className="gutter-row" span={20} offset ={22}>
                        <Button type="ghost" htmlType="submit" onClick = {this.handleDelete} id = {this.props.id}>
                            <DeleteOutlined />
                        </Button>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

export default connect(mapStateToProps)(SkillFormComponent);