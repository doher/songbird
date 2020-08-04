import React from 'react';
import MenuItem from './menu-item';
import groups from '../../../data/groups';
import classes from './menu.module.css';

const Menu = (props) => {
  const { stage } = props;
  const menuItems = groups.map((group, index) => {
    if (stage === index) {
      return <MenuItem key={index} selected>{group}</MenuItem>;
    }

    return <MenuItem key={index}>{group}</MenuItem>;
  });

  return (
    <ul className={classes.List}>
      {menuItems}
    </ul>
  );
};

export default Menu;
