import React, { Component } from 'react';
import Header from './components/header';
import CurrentQuestion from './components/current-question';
import AnswerOptions from './components/answer-options';
import BirdDescription from './components/bird-description';
import AnswerButton from './components/answer-button';
import classes from './App.module.css';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <CurrentQuestion />
        <AnswerOptions />
        <BirdDescription />
        <AnswerButton />
      </div>
    );
  }
}

export default App;
