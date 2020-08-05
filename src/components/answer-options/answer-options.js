import React from 'react';
import Option from './option';
import classes from './answer-options.module.css';

const AnswerOptions = (props) => {
  const { options, onCheckAnswer } = props;

  const list = options.map((el) => {
    return (
      <Option
        key={el.id}
        err={el.err}
        success={el.success}
        onCheckAnswer={() => onCheckAnswer(el.id)}
      >
        {el.name}
      </Option>
    );
  });

  return (
    <ul className={`list-group ${classes.List}`}>
      {list}
    </ul>
  );
};

export default AnswerOptions;
