import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import sprite from '../../images/icons/sprite.svg';

const LinkBtn = ({ icon, customClass, customIconClass, link }) => {
  return (
    <NavLink
      to={'/' + link}
      className={!customClass ? css.button : css.button + ' ' + customClass}
    >
      {/* <svg
        className={
          !customIconClass ? css.icon : css.icon + ' ' + customIconClass
        }
      >
        <use href={sprite + icon}></use>
      </svg> */}
    </NavLink>
  );
};

LinkBtn.defaultProps = {
  link: '',
};

LinkBtn.propTypes = {
  //   icon: PropTypes.string,
  customClass: PropTypes.string,
  //   customIconClass: PropTypes.string,
  link: PropTypes.string,
};

export default LinkBtn;
