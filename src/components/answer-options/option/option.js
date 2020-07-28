import React from 'react';
import classes from './option.module.css';

const Option = (props) => {
  const { children, isGuessed, clicked } = props;

  const classNames = isGuessed
    ? `${classes.Dot} ${classes.Success}`
    : `${classes.Dot} ${classes.Error}`

  return (
    <li className={classes.Option} onClick={clicked}>
      {/* <span className={`${classes.Dot} ${classes.Error}`}></span> */}
      <span className={classNames}></span>
      {children}
    </li>
  );
};

export default Option;
