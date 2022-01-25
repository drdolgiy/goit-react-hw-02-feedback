import React from 'react';
import PropTypes from 'prop-types';

class Feedbacks extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h2>Please leave Feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>

        <h2>Statistics</h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
      </div>
    );
  }
}

export default Feedbacks;
