import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  // componentList = [];
  // constructor(props) {
  //   super(props);
  //   // this.needToFocusElement = React.createRef();
  // }
  state = {
    inputOne: ""
  }
  componentDidMount() {
    // this.needToFocusElement.focus();
    // this.needToFocusElement.current.focus();
  }

  onClickHandler = (index) => {
    let str = this.state.inputOne;
    // const index = parseInt(event.target.className, 10);
    // this.componentList.splice(index, 1);
    // event.target.remove();
    str = str.substring(0, index) + str.substring(index + 1);
    // We can use split, splice and join on the array that is formed from the string 
    this.setState({
      inputOne: str
    });
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputOne: event.target.value
    });
    // const val = event.target.value.toString();
    // this.componentList = val.split('').map((ch, index) => {
    //   return <CharComponent key={index} keyClass={index} typedValue={ch} handler={this.onClickHandler} />
    // });
  }

  render() {
    const componentList = this.state.inputOne.split('').map((ch, index) => {
      //return <CharComponent key={index} keyClass={index} typedValue={ch} handler={() => this.onClickHandler(index)} />
      return <CharComponent key={index} index={index} keyClass={index} typedValue={ch} handler={this.onClickHandler} />
    });

    return (
      // Use Pure component to make react reduce the update cycles 
      // <React.Fragment></React.Fragment>
      <div className="App">
        <input
          ref={(inputEl) => {this.needToFocusElement = inputEl}}
          // ref={this.needToFocusElement}
          onChange={this.inputChangeHandler}
          value={this.state.inputOne} />  
        <p>{this.state.inputOne.length}</p>
        <ValidationComponent inputLength={this.state.inputOne.length} />
        {componentList}

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component ( ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
