import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ text, customClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={!customClass ? css.button : css.button + ' ' + customClass}
    >
      {text}
    </button>
  );
};

/*
display: inline-flex;
padding: 10px 24px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;


*/

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Btn;
