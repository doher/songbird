import React from 'react';
import classes from './option.module.css';

const Option = (props) => {
  const { children } = props;

  return (
    <li className={classes.Option}>
      <span className={`${classes.Dot} ${classes.Error}`}></span>
      {children}
    </li>
  );
};

export default Option;
