import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import AddResumeComponent from './components/Resume/AddResumeComponent';
import './App.less';

import history from './helpers/history';
import { Spin } from 'antd';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/Authentication/LoginComponent';
import PrivateRouter from './helpers/PrivateRouter'
import RegistrationComponent from './components/Authentication/RegistrationComponent';
import {connect} from 'react-redux';
import AlertNotification from './components/Alerts/AlertNotification';
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
        <AlertNotification alertMessage = {alertMessage()}/>
          <Router history ={history}>
            <PrivateRouter exact path='/' component={HomeComponent}/>
            <Route exact path='/login' component={LoginComponent}/>
            <Route exact path='/register' component={RegistrationComponent}/>
            <PrivateRouter exact path='/add-resume' component = {AddResumeComponent}/>
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
