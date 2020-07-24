import React from 'react';
import Logo from './logo';
import Score from './score';
import Menu from './menu';
import classes from './header.module.css';

const Header = () => (
  <div>
    <Logo />
    <Score />
    <Menu />
  </div>
);

export default Header;
