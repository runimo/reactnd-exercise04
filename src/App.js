import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);

class App extends Component {
 
 constructor(props) {
   super(props);

   this.state = {
     numCorrect: 0,
     numQuestions: 0,
     value1: value1,
     value2: value2,
     value3: value3,
     proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
   }
 }

  checkAnswer = (answer) => {
    if (answer === (this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer)) {
      this.setState((currentState) => ({
        numCorrect: ++currentState.numCorrect,
        numQuestions: ++currentState.numQuestions,
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
      }))} else {
         this.setState((currentState) => ({
         numQuestions: ++currentState.numQuestions,
         value1: Math.floor(Math.random() * 100),
         value2: Math.floor(Math.random() * 100),
         value3: Math.floor(Math.random() * 100),
         proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
      }))
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
