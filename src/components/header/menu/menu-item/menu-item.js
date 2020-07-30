import React from 'react';
import classes from './menu-item.module.css';

const MenuItem = (props) => {
  const { selected } = props;

  let classNames = `${classes.MenuItem}`;

  if (selected) {
    classNames += ` ${classes.SelectedItem}`;
  }

  return (
    <li className={classNames}>
      {props.children}
    </li>
  );
};

export default MenuItem;
