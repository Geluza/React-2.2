import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch(props) {
  const {icon, onSwitch} = props;
  return (
    <button className="icon material-icons" onClick={onSwitch}>
      {icon}
    </button>
  );
}

export default IconSwitch;

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};