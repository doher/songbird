import React from 'react';

import WinPage from './win-page';
import TryAgainPage from './try-again-page';

import { MAX_POINTS } from '../../data/game-data';
import classes from './final-page.module.css';

const FinalPage = (props) => {
  const { score, clicked } = props;

  const finalBlock = (score < MAX_POINTS)
    ? (
      <TryAgainPage
        clicked={clicked}
        score={score}
      />
    )
    : <WinPage clicked={clicked} />;

  return (
    <div className={classes.FinalPage}>
      {finalBlock}
    </div >
  )
};

export default FinalPage;
