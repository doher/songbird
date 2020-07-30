import React from 'react';
import Logo from './logo';
import Score from './score';
import Menu from './menu';
import classes from './header.module.css';

const Header = (props) => {
  const { totalScore, stage } = props;

  return (
    <div className={classes.Header}>
      <Logo />
      <Score score={totalScore} />
      <Menu stage={stage} />
    </div>
  );
};

export default Header;
