import React, { Component } from 'react';
import Header from './components/header';
import AnswerOptions from './components/answer-options';
import classes from './App.module.css';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <AnswerOptions />
      </div>
    );
  }
}

export default App;
