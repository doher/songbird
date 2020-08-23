import React from 'react';
import classes from './option.module.css';

const Option = (props) => {
  const { children, err, success, onCheckAnswer } = props;

  let classNames = `${classes.Dot}`;

  if (err) {
    classNames += ` ${classes.Error}`;
  }

  if (success) {
    classNames += ` ${classes.Success}`;
  }

  return (
    // <li className={classes.Option} onClick={onCheckAnswer}>
    <li
      className={`list-group-item d-flex align-items-center ${classes.Option}`}
      onClick={onCheckAnswer}
    >
      <span className={classNames}></span>
      {children}
    </li>
  );
};

export default Option;
