import React from 'react';
import {ReactComponent as ReactLogo} from '../../../assets/image/logo.svg';
import classes from './logo.module.css';

const Logo = () => (
  <h1 className={classes.Logo}>
    <ReactLogo />
  </h1>
);

export default Logo;
