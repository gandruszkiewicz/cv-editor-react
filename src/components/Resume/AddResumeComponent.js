import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message, Col, Row } from 'antd';
import LayoutComponent from '../Layout/LayoutComponent';
import PersonalDataFormComponent from './PersonalDataFormComponent';  
import MultipleFormsComponent from '../MultipleFormsComponent';
import ExperienceComponent from './ExperienceComponent';
import QualificationComponent from './QualificationComponent';

class AddResumeComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
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
        var mountedComponent = null;
        const steps = [
            {
            id:1,
            title: 'Personal data',
            content: <PersonalDataFormComponent state = {this.props.state.resume}/>,
            },
            {
            id: 2,
            title: 'Experience',
            content:  <MultipleFormsComponent 
                        component = {ExperienceComponent} 
                        fluxStoreName = "experience"
                        key ="experience"/>
            },
            {
            id: 3,
            title: 'Qualification',
            content: <MultipleFormsComponent
                      component = {QualificationComponent}
                      fluxStoreName = "qualification"
                      key="qualification"/>
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
              <div className="steps-content">{steps[current].content}</div>
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

export default LayoutComponent(connect(mapStateToProps)(AddResumeComponent));