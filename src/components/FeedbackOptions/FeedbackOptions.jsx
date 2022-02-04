import React from 'react';
import propTypes from 'prop-types';
import { ButtonStyled } from './FeedbacksOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, type = 'button' }) => {
  return (
    <div>
      {options.map(option => (
        <ButtonStyled
          type={type}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonStyled>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
