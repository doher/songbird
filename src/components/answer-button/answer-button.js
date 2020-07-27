import React from 'react';
import classes from './answer-button.module.css';

const AnswerButton = (props) => {
  const { clicked } = props;

  return (
    <button
      className={classes.Button}
      onClick={clicked}
     >
      Next Level
    </button>
  );
};

export default AnswerButton;
