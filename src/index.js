import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginComponent from './components/Authentication/LoginComponent';
import PrivateRouter from './helpers/PrivateRouter'
import RegistrationComponent from './components/Authentication/RegistrationComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <Switch>
          <PrivateRouter exact path='/' component={App}/>
          <Route exact path='/login' component={LoginComponent}/>
          <Route exact path='/register' component={RegistrationComponent}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
