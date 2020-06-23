import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import ResumeFormComponent from './components/Resume/resumeForm.component';
import './App.less';

import history from './helpers/history';
import { Spin } from 'antd';
import HomeComponent from './components/Layout/home.component';
import LoginFormComponent from './components/Authentication/loginForm.component';
import PrivateRouter from './helpers/PrivateRouter'
import RegistrationFormComponent from './components/Authentication/registratonForm.component';
import {connect} from 'react-redux';
import AlertNotificationComponent from './components/Alerts/alertNotification.component';
import {alertActions} from './actions/alert.actions'

class App extends Component {
  render(){
    const isSpinning = this.props.spin.isSpinning;

    const alertMessage = () => {
      var alert = this.props.alert;
      if(alert.error){
        return{
          message: alert.error,
          type: "error"
        };
      }else if(alert.success){
        const {dispatch} = this.props;
        dispatch(alertActions.clear());
        return{
          message: alert.success,
          type: "success"
        };
      }else{
        return null;
      }
    }

    return (
      <Spin tip = "Loading..." spinning = {isSpinning}>
        <div className="App">
        <AlertNotificationComponent alertMessage = {alertMessage()}/>
          <Router history ={history}>
            <PrivateRouter exact path='/' component={HomeComponent}/>
            <Route exact path='/login' component={LoginFormComponent}/>
            <Route exact path='/register' component={RegistrationFormComponent}/>
            <PrivateRouter exact path='/add-resume' component = {ResumeFormComponent}/>
            <PrivateRouter exact path='/edit-resume/:resumeId' component = {ResumeFormComponent}/>
          </Router>
        </div>
      </Spin>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    spin: state.spin,
    alert: state.alertReducer
  };
}

export default connect(mapStateToProps)(App);
