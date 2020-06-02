import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import AddResumeComponent from './components/Resume/AddResumeComponent';
import './App.less';

import history from './helpers/history';

import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/Authentication/LoginComponent';
import PrivateRouter from './helpers/PrivateRouter'
import RegistrationComponent from './components/Authentication/RegistrationComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router history ={history}>
          <PrivateRouter exact path='/' component={HomeComponent}/>
          <Route exact path='/login' component={LoginComponent}/>
          <Route exact path='/register' component={RegistrationComponent}/>
          <PrivateRouter exact path='/add-resume' component = {AddResumeComponent}/>
        </Router>
      </div>
    );
  }

}


export default App;
