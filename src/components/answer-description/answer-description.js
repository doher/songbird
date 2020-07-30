import React from 'react';
import Card from '../card';
import classes from './answer-description.module.css';

const AnswerDescription = (props) => {
  const { options, chosenId } = props;

  let card = (
    <>
      <div className={classes.EmptyDescription}> Послушайте плеер.Выберите птицу из списка</div >
    </>
  );

  if (chosenId) {
    const selectedOption = options[chosenId - 1];
    const {name, species, description, image, audio} = selectedOption;

    card = (
      <>
        <Card
          name={name}
          species={species}
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
