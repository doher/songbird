import React from 'react';
import BirdImage from './bird-image';
import classes from './bird-description.module.css';

const BirdDescription = (props) => {
  return (
    <div className={classes.BirdDescription}>
      <BirdImage />
    </div>
  );
};

export default BirdDescription;
