import React, { Component } from 'react';
import LayoutComponent from './components/Layout/LayoutComponent'
import LoginComponent from './components/LoginComponent'
import './App.less';

class App extends Component {
  
  // needs to pass user when component is mounted
  state = {
    currentUser: null
  }

  render(){
    if(this.state.currentUser !== null){
      return (
        <div className="App">
          <LayoutComponent/>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <LoginComponent/>
        </div>
      );
    }

  }

}

export default App;
