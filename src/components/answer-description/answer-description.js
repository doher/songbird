import React from 'react';
import Card from '../card';
import classes from './answer-description.module.css';

const AnswerDescription = (props) => {
  const { options, chosenId } = props;

  let card = (
    <>
      <div className={classes.EmptyDescription}>Listen the audio and try to choose correct answer.</div >
    </>
  );

  if (chosenId) {
    const selectedOption = options[chosenId - 1];
    const {name, genres, description, image, audio} = selectedOption;

    card = (
      <>
        <Card
          name={name}
          genres={genres}
          image={image}
          audio={audio}
          showed
        />
        <div className={classes.DescriptionText}>{description}</div>
      </>
    );
  }

  return (
    <div className={classes.AnswerDescription}>
      {card}
    </div>
  )
};

export default AnswerDescription;
