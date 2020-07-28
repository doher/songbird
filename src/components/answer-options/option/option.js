import React from 'react';
import classes from './option.module.css';

const Option = (props) => {
  const { children, clicked } = props;

  return (
    <li className={classes.Option} onClick={clicked}>
      <span className={`${classes.Dot} ${classes.Error}`}></span>
      {children}
    </li>
  );
};

export default Option;
