import React from 'react';
import PropTypes from 'prop-types';

import sprite from '../../images/icons/sprite.svg';

const IconBtn = ({ icon, type, onClick, customClass, customIconClass }) => {
  const btnClass = 'p-4 inline-flex justify-center items-center rounded-lg';
  const IconClass = 'w-6 h-6';
  return (
    <button
      type={type}
      className={!customClass ? btnClass : btnClass + ' ' + customClass}
      onClick={onClick}
    >
      <svg
        className={
          !customIconClass ? IconClass : IconClass + ' ' + customIconClass
        }
      >
        <use href={sprite + icon}></use>
      </svg>
    </button>
  );
};

IconBtn.defaultProps = {
  icon: '#icon-cross-small',
  type: 'button',
  customClass: '',
  customIconClass: '',
};

IconBtn.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  customClass: PropTypes.string,
  customIconClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconBtn;

/*
display: inline-flex;
padding: 16px;
justify-content: center;
align-items: center;
gap: 16px;

border-radius: 8px;
background: #FFF;


box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
*/
