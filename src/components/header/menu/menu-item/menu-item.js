import React from 'react';
import classes from './menu-item.module.css';

const MenuItem = (props) => (
  <li className={classes.MenuItem}>
    {props.children}
  </li>
);

export default MenuItem;
