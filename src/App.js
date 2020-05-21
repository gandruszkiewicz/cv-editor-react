import React, { Component } from 'react';
import './App.less';

import LayoutComponent from './components/Layout/LayoutComponent';

class App extends Component {

  render(){
    return (
      <div className="App">
        <LayoutComponent/>
      </div>
    );
  }

}

export default App;
