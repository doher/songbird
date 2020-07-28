import React, { Component } from 'react';
import Header from './components/header';
import AnswerDescription from './components/answer-description';
import CurrentQuestion from './components/current-question';
import AnswerOptions from './components/answer-options';
import AnswerButton from './components/answer-button';
import birdsData from './data/birds-data';
import getRandomInt from './utils/getRandomInt';
import classes from './App.module.css';

class App extends Component {
  state = {
    stage: 0,
    randomId: getRandomInt(0, birdsData[0].length - 1),
    currentSet: birdsData[0],
    isGuessed: false,
    choice: undefined,
  }

  getChoiceOfUser = (id, rand) => {
    if (id === (rand + 1)) {
      this.setState({
        isGuessed: true,
      });
    }

    this.setState({
      choice: id,
    });
  }

  testRandInt(rand) {
    console.log('rand', rand);
  }

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <div className={classes.CurrentQuestion}>
          <CurrentQuestion
            options={this.state.currentSet}
            isGuessed={this.state.isGuessed}
            randId={this.state.randomId}
          />
        </div>
        <div className={classes.Answer}>
          <AnswerOptions
            options={this.state.currentSet}
            isGuessed={this.state.isGuessed}
            randId={this.state.randomId}
            clicked={this.getChoiceOfUser}
          />
          <AnswerDescription
            options={this.state.currentSet}
            isGuessed={this.state.isGuessed}
            choice={this.state.choice}
          />
        </div>
        <AnswerButton
          clicked={() => this.testRandInt(this.state.randomId)}
        />
      </div>
    );
  }
}

export default App;
