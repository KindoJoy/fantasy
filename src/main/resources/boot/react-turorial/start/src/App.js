import React, { Component } from 'react';

// import './assets/css/App.css';

// import Kindo from './components/Kindo';
// import List from './components/List';
// import Alias from './components/Alias';
// import Event from './components/Event';
// import EventBind from './components/EventBind';
// import TodoList from './components/TodoList';
// import Parent from './components/Parent';
import LifeCycleRoot from './components/LifeCycleRoot';

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
        {/* <Kindo />
        <List></List>
        <Alias />
        <Event />
        <EventBind />
        <TodoList />
        <Parent /> */}
        <LifeCycleRoot />
      </div>
    );
  }
}

export default App;
