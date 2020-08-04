import React, { Component } from 'react';

import Header from './components/header';
import AnswerDescription from './components/answer-description';
import CurrentQuestion from './components/current-question';
import AnswerOptions from './components/answer-options';
import AnswerButton from './components/answer-button';

import rockData from './data/rock-data';
import getRandomInt from './utils/getRandomInt';

import classes from './App.module.css';

class App extends Component {
  state = {
    chosenId: undefined,
    currentScore: 5,
    currentSet: rockData[0].map((el) => ({ ...el, err: false, success: false })),
    currentStage: 0,
    isGuessed: false,
    randomId: getRandomInt(0, 5),
    totalScore: 0,
  };

  toggleProperty = (arr, id, propName, value) => {
    const idx = arr.findIndex((item) => (item.id === id));
    const item = { ...arr[idx], [propName]: value };

    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onCheckAnswer = (id) => {
    this.setState((state) => {
      const { currentSet, isGuessed, randomId, currentScore, totalScore } = state;
      let items = currentSet;

      if (!isGuessed) {
        if ((randomId + 1) === id) {
          const updatedTotalScore = totalScore + currentScore;
          const correctSound = new Audio('./assets/audio/correct.mp3');

          correctSound.play();
          items = this.toggleProperty(state.currentSet, id, 'success', true);

          return {
            chosenId: id,
            currentSet: items,
            isGuessed: true,
            totalScore: updatedTotalScore,
          };
        } else if (!items[id - 1].err) {
          const updatedScore = currentScore - 1;
          const wrongSound = new Audio('./assets/audio/wrong.mp3');

          wrongSound.play();
          items = this.toggleProperty(state.currentSet, id, 'err', true);

          return {
            chosenId: id,
            currentSet: items,
            currentScore: updatedScore,
          };
        }
      }

      return {
        chosenId: id
      };
    });
  };

  goToNextLevel = () => {
    this.setState((state) => {
      const { currentStage } = state;
      const updatedStage = currentStage >= (rockData.length - 1) ? currentStage : currentStage + 1;

      return {
        chosenId: undefined,
        currentSet: rockData[updatedStage].map((el) => ({ ...el, err: false, success: false })),
        currentScore: 5,
        currentStage: updatedStage,
        isGuessed: false,
        randomId: getRandomInt(0, 5),
      };
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <Header
          stage={this.state.currentStage}
          totalScore={this.state.totalScore}
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
          clicked={this.goToNextLevel}
        />
      </div>
    );
  }
}

export default App;
