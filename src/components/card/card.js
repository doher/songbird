import React from 'react';
import CardImage from './card-image';
import Description from './description';
import classes from './card.module.css';

const Card = () => {
  const image = null;

  return (
    <div className={classes.Card}>
      <CardImage
        image={image}
      />
      <Description />
    </div>
  )
};

export default Card;
