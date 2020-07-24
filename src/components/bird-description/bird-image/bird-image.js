import React from 'react';
import classes from './bird-image.module.css';

const BirdImage = () => {
  return (
    <img
      className={classes.Image}
      src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
      alt="bird"
    />
  )
};

export default BirdImage;