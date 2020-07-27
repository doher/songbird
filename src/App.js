import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import AnswerOptions from './components/answer-options';
import AnswerButton from './components/answer-button';
import classes from './App.module.css';

class App extends Component {
  test = () => {
    console.log('hello!');
  }

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <div className={classes.CurrentQuestion}>
          <Card />
        </div>
        <div className={classes.Answer}>
          <AnswerOptions />
          <Card />
        </div>
        <AnswerButton
          clicked={this.test}
        />
      </div>
    );
  }
}

export default App;
