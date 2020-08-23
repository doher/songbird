import React from 'react';
import CardImage from './card-image';
import Description from './description';
import classes from './card.module.css';

const Card = (props) => {
  const { name, song, image, audio, showed } = props;
  const img = showed ? image : null;

  return (
    <div className={classes.Card}>
      <CardImage
        image={img}
      />
      <Description
        name={name}
        audio={audio}
        showed={showed}
        song={song}
      />
    </div>
  )
};

export default Card;
