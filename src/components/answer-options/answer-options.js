import React from 'react';
import Option from './option';
import classes from './answer-options.module.css';

const AnswerOptions = (props) => {
  const { options, clicked } = props;
  const list = options.map((el) => {
    return (
      <Option
        key={el.id}
        clicked={() => clicked(el.id)}
      >
        {el.name}
      </Option>
    );
  });

  return (
    <ul className={classes.List}>
      {list}
    </ul>
  );
};

export default AnswerOptions;
