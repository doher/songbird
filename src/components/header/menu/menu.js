import React from 'react';
import MenuItem from './menu-item';
import classes from './menu.module.css';

const items = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

const Menu = (props) => {
  const { stage } = props;
  const menuItems = items.map((item, index) => {
    if (stage === index) {
      return <MenuItem key={index} selected>{item}</MenuItem>;
    }

    return <MenuItem key={index}>{item}</MenuItem>;
  });

  return (
    <ul className={classes.List}>
      {menuItems}
    </ul>
  );
};

export default Menu;
