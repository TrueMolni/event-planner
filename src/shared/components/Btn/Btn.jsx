import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ text, customClass, onClick, type }) => {
  const buttonStyles =
    'flex justify center items-center rounded-lg py-[10px] px-6 bg-accent-500 text-[#f3f3f3] cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      className={!customClass ? buttonStyles : buttonStyles + ' ' + customClass}
    >
      {text}
    </button>
  );
};
Btn.defaultProps = {
  type: 'button',
};

Btn.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  type: PropTypes.string,
};

export default Btn;
