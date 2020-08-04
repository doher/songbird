import React from 'react';
import AudioPlayer from './audio-player';
import classes from './description.module.css';

const Description = (props) => {
  const { name, audio, genres, showed } = props;
  const facts = genres
    ? (
      <li
        className={`${classes.DescriptionItem} ${classes.NameInLatin}`}
      >
        {genres}
      </li>)
    : null

  return (
    <>
      <ul className={classes.Description}>
        <li className={classes.DescriptionItem}>{showed ? name : '*****'}</li>
        {genres}
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
