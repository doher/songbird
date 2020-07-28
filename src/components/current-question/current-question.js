import React from 'react';
import Card from '../card';
import classes from './current-question.module.css';

const CurrentQuestion = (props) => {
  const { options, randId, isGuessed } = props;
  const question = options[randId];
  const { name, image, audio } = question;

  return (
    <div className={classes.CurrentQuestion}>
      <Card
        showed={isGuessed}
        name={name}
        image={image}
        audio={audio}
      />
    </div>
  )
};

export default CurrentQuestion;
