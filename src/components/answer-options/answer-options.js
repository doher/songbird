import React from 'react';
import Option from './option';
import classes from './answer-options.module.css';

const birdData = [
  'Ворон',
  'Журавль',
  'Ласточка',
  'Козодой',
  'Кукушка',
  'Синица',
];

const AnswerOptions = () => {
  const options = birdData.map((el, index) => <Option key={index}>{el}</Option>)

  return (
    <ul className={classes.List}>
      {options}
    </ul>
  );
};

export default AnswerOptions;
