import React from 'react';
import DefaultImage from '../../../assets/image/default.jpg';
import classes from './card-image.module.css';

const CardImage = (props) => {
  const { image } = props;
  const currentImage = image ? image : DefaultImage;

  return (
    <img
      className={classes.Image}
      src={currentImage}
      alt="group"
    />
  )
};

export default CardImage;