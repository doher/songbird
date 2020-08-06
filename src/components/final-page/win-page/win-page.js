import React from 'react';
import classes from './win-page.module.css';

const WinPage = (props) => {
  const { clicked } = props;

  return (
    <>
      <h2
        className={classes.Congratulations}
      >
        You really know rock music!
      </h2>
      <button
        className={classes.NewGameButton}
        onClick={clicked}
      >
        Start New Game
      </button>
    </>
  );
};

export default WinPage;

