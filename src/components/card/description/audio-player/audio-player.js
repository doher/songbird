import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {
  const { audio } = props;
  const path = audio ? audio : null;

  return (
    <ReactAudioPlayer
      src={path}
      controls
      style={{ width: '100%' }}
    />
  );
};

export default AudioPlayer;
