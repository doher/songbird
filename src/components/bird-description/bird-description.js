import React from 'react';
import BirdImage from './bird-image';
import classes from './bird-description.module.css';

const BirdDescription = (props) => {
  return (
    <div className={classes.DescriptionContainer}>
      <BirdImage />
      <ul className={classes.DescriptionList}>
        <li>Bird Name</li>
        <li>Bird Name in lat.</li>
        <li>Player</li>
      </ul>
      <div className={classes.DescriptionText}>Some text about bird.</div>
    </div>
  );
};

export default BirdDescription;
