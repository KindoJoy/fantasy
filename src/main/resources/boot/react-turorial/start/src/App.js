import React, { Component } from 'react';

// import './assets/css/App.css';

import Router from './components/Router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      num: 0
    };
  }

  toggleChildCmp = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  increaseNum = () => {
    //给子组件绑定num，更细num时，调用componentWillReceiveProps
    this.setState({
      num: this.state.num + 1
    })
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
