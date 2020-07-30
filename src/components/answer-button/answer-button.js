import React from 'react';
import classes from './answer-button.module.css';

const AnswerButton = (props) => {
  const { clicked, isGuessed } = props;
  let classNames = `${classes.Button}`;

  if (isGuessed) {
    classNames += ` ${classes.Success}`;
  }

  return (
    <button
      className={classNames}
      onClick={clicked}
      disabled={!isGuessed}
    >
      Next Level
    </button>
  );
};

export default AnswerButton;
