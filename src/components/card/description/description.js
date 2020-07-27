import React from 'react';
import AudioPlayer from './audio-player';
import classes from './description.module.css';

const Description = (props) => {
  return (
    <>
      <ul className={classes.Description}>
        <li className={classes.DescriptionItem}>*****</li>
        <li
          className={`${classes.DescriptionItem} ${classes.NameInLatin}`}
        >
          Name in Latin
        </li>
        <li className={classes.DescriptionAudioItem}>
          <AudioPlayer />
        </li>
        <li className={classes.DescriptionText}>Some text about card</li>
      </ul>
    </>
  )
};

export default Description;
