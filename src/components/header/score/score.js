import React from 'react';
import classes from './score.module.css';

const Score = (props) => {
  const { score } = props;

  return (
    <h5 className={classes.ScoreContainer}>Score: {score}</h5>
  );
};

export default Score;
