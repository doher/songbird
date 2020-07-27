import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {
  const { sound } = props;
  const path = sound ? sound : null;

  return (
    <ReactAudioPlayer
      src={path}
      controls
      style={{ width: '100%' }}
    />
  );
};

export default AudioPlayer;
