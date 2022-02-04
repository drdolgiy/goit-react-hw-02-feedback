import React from 'react';
import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
