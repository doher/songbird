import React from 'react';
import classes from './try-again-page.module.css';

const TryAgainPage = (props) => {
  const { score, clicked } = props;

  return (
    <>
      <div className={classes.Message}>
        <h2>
          Your score is {score}/35
      </h2>
        <p><a
          href="https://en.wikipedia.org/wiki/Seven_Ages_of_Rock"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read this article and try again.
      </a></p>
      </div>

      <button
        className={classes.NewGameButton}
        onClick={clicked}
      >
        Try Again
      </button>
    </>
  );
};

export default TryAgainPage;
