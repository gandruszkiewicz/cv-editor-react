import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message, Col, Row } from 'antd';
import LayoutComponent from '../Layout/layout.component';
import PersonalDataFormComponent from './personalDataForm.component';  
import MultipleFormsComponent from './multipleForms.component';
import ExperienceFormComponent from './experienceForm.component';
import QualificationFormComponent from './qualificationForm.component';
import SkillFormComponent from './skillForm.component';
import { operationTypeActions } from '../../actions/operationType.actions'
import {operationTypesEnum} from '../../helpers/operationTypesEnum'
import resumeActions from '../../actions/resume/resume.action';
import { resumeComponentsActions } from '../../actions/resumeComponents/resumeComponents.actions';

class ResumeFormComponent extends Component {
    
    constructor(props) {
        super(props);
        this.initState();
      }

      initState(){
        let pathName = window.location.pathname;
        const { dispatch } = this.props;

        switch(pathName){

          case pathName.match(/edit-resume/)?.input:
            dispatch(operationTypeActions.changeToEdit())
            dispatch(resumeActions.getById(this.props.match.params.resumeId))
            this.state = {
              current: 0,
              operationType: operationTypesEnum.EDIT
            };
            
            return;

          default:
            dispatch(operationTypeActions.changeToAdd())
            this.state = {
              current: 0,
              operationType: operationTypesEnum.ADD
            };
        }
      }

      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

    render(){
        const { Step } = Steps;
        const steps = [
            {
            id:1,
            title: 'Personal data',
            content: <PersonalDataFormComponent
                        resume = {this.props.state.resume}
                        key = {"resume"}/>,
            },
            {
            id: 2,
            title: 'Experience',
            content:  <MultipleFormsComponent 
                        component = {ExperienceFormComponent} 
                        fluxStoreName = "experience"
                        key ="experience"/>
            },
            {
            id: 3,
            title: 'Qualification',
            content: <MultipleFormsComponent
                      component = {QualificationFormComponent}
                      fluxStoreName = "qualification"
                      key="qualification"/>
            },
            {
              id: 4,
              title: 'Skill',
              content: <MultipleFormsComponent
                        component = {SkillFormComponent}
                        fluxStoreName = "skill"
                        key="skill"/>
              },
            
        ];

        const { current } = this.state;
        return(
          <Row gutter={{xs: 8, sm: 16, md: 24, lg:32 }}>
            <Col className="gutter-row" span={12}>
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className="steps-content">
                {steps[current].content}
              </div>
              <div className="steps-action">
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => this.next()}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                )}
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
                  Here will be rendered resume
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

export default LayoutComponent(connect(mapStateToProps)(ResumeFormComponent));