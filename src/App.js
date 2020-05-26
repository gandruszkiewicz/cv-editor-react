import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import './App.less';

import history from './helpers/history';

import LayoutComponent from './components/Layout/LayoutComponent';
import LoginComponent from './components/Authentication/LoginComponent';
import PrivateRouter from './helpers/PrivateRouter'
import RegistrationComponent from './components/Authentication/RegistrationComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router history ={history}>
          <PrivateRouter exact path='/' component={LayoutComponent}/>
          <Route exact path='/login' component={LoginComponent}/>
          <Route exact path='/register' component={RegistrationComponent}/>
        </Router>
      </div>
    );
  }

}


export default App;
