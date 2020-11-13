import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {

  state = {
    userName: "Wolverine",
    messages: ["One", "Two", "Three"],
    valBool: false
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  goodHandler = () => {
    const valBoolLocal = this.state.valBool;
    if(!valBoolLocal) {
      this.setState({valBool: true});
    }
    else {
      this.setState({valBool: false});
    }
    console.log(this.state.valBool);
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my first assignment</h1>
        <UserInput typed={this.userNameChangeHandler} oldInput={this.state.userName} isStyleNeeded={this.state.valBool}/>
        <div className="main">
          <UserOutput userName={this.state.userName} message={this.state.messages[0]} clickOn={this.goodHandler}/>
          <UserOutput userName={this.state.userName} message={this.state.messages[1]} />
          <UserOutput userName={this.state.userName} message={this.state.messages[2]} />
        </div>
      </div>
    );
  }
}

export default App;
