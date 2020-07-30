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
    chosenId: undefined,
    currentSet: birdsData[0].map((el) => ({ ...el, err: false, success: false })),
    currentStage: 0,
    isGuessed: false,
    randomId: getRandomInt(0, 5),
    score: 5,
  };

  toggleProperty = (arr, id, propName, value) => {
    const idx = arr.findIndex((item) => item.id === id);
    const item = { ...arr[idx], [propName]: value };

    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onCheckAnswer = (id) => {
    this.setState((state) => {
      const { currentSet, isGuessed, randomId, score } = state;
      let items = currentSet;

      if (!isGuessed) {
        if ((randomId + 1) === id) {
          items = this.toggleProperty(state.currentSet, id, 'success', true);

          return {
            currentSet: items,
            chosenId: id,
            isGuessed: true,
          };
        } else {
          const updatedScore = score - 1;

          items = this.toggleProperty(state.currentSet, id, 'err', true);

          return {
            currentSet: items,
            chosenId: id,
            score: updatedScore,
          };
        }
      }

      return {
        currentSet: items,
        chosenId: id
      };
    });
  };

  testRandInt(rand) {
    console.log('rand', rand);
  }

  render() {
    console.log(this.state.score);

    return (
      <div className={classes.App}>
        <Header
          score={this.state.score}
        />
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
            onCheckAnswer={this.onCheckAnswer}
            isGuessed={this.state.isGuessed}
          />
          <AnswerDescription
            options={this.state.currentSet}
            isGuessed={this.state.isGuessed}
            chosenId={this.state.chosenId}
          />
        </div>
        <AnswerButton
          isGuessed={this.state.isGuessed}
          clicked={() => this.testRandInt(this.state.randomId)}
        />
      </div>
    );
  }
}

export default App;
