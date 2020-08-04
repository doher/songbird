import React from 'react';
import AudioPlayer from './audio-player';
import classes from './description.module.css';

const Description = (props) => {
  const { name, audio, song, showed } = props;
  const facts = song
    ? (
      <li
        className={`${classes.DescriptionItem} ${classes.NameInLatin}`}
      >
        {song}
      </li>)
    : null

  return (
    <>
      <ul className={classes.Description}>
        <li className={classes.DescriptionItem}>{showed ? name : '*****'}</li>
        {facts}
        <li className={classes.DescriptionAudioItem}>
          <AudioPlayer
            audio={audio}
          />
        </li>
      </ul>
    </>
  )
};

export default Description;
