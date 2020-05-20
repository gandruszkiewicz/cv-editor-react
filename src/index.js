import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import PrivateRouter from './helpers/PrivateRouter'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <PrivateRouter exact path='/' component={App}/>
        <Route exact path='/login' component={LoginComponent}/>
      </Switch>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
