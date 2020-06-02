import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message } from 'antd';
import LayoutComponent from '../Layout/LayoutComponent';
import PersonalDataFormComponent from './PersonalDataFormComponent';  

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

        const steps = [
            {
            id:1,
            title: 'Personal data',
            content: <PersonalDataFormComponent state = {this.props.state.resume}/>,
            },
            {
            id: 2,
            title: 'Second',
            content:  <></>,
            },
            {
            id: 3,
            title: 'Last',
            content: <></>,
            },
        ];

        const { current } = this.state;
        return(
            <div>           
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
          </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

export default LayoutComponent(connect(mapStateToProps)(AddResumeComponent));