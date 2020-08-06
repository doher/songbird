import React from 'react';
import classes from './answer-button.module.css';

const AnswerButton = (props) => {
  const { clicked, isGuessed } = props;
  let classNames = `btn btn-primary disabled ${classes.Button}`;

  if (isGuessed) {
    classNames = `btn btn-warning ${classes.Button}`;
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={clicked}
      disabled={!isGuessed}
    >
      Next Level
    </button>
  );
};

export default AnswerButton;
