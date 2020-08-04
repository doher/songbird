import React from 'react';
import classes from './final-page.module.css';

const FinalPage = (props) => {
  const { clicked } = props;

  return (
    <div className={classes.FinalPage}>
      <h2
        className={classes.Congratulations}
      >
        You really know rock music!
      </h2>
      <button
        className={classes.NewGameButton}
        onClick={clicked}
      >
        start new game
      </button>
    </div >
  )
};

export default FinalPage;
