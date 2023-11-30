import React from 'react';
import PropTypes from 'prop-types';

import Btn from 'shared/components/Btn/Btn';
import image from '../../../../shared/images/defaults/default-vert.png';

import css from './events-item.module.css';

const EventsItem = ({
  id,
  img,
  text,
  title,
  onClick,
  date,
  time,
  place,
  itemClass,
  category,
  priority,
}) => {
  const formatDateTime = timestamp => {
    const dateObject = new Date(timestamp * 1000); // конвертація в мілісекунди

    // якщо це значення часу
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
  };

  const formatDate = timestamp => {
    const dateObject = new Date(timestamp * 1000); // конвертація в мілісекунди
    const options = { month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
  };

  const imageWrapperStyle = 'h-[280px] relative ';
  const imageStyle = 'w-full h-full rounded-lg';
  const itemStyle =
    'flex flex-col items-center w-[271px] md:w-[332px] h-[480px] rounded-lg shadow-base bg-white';

  return (
    <li className={!itemClass ? itemStyle : itemStyle + ' ' + itemClass}>
      <div className={imageWrapperStyle}>
        <img className={imageStyle} src={img} alt={text} />
        <div
          className="absolute bottom-0 w-full flex justify-between px-4 py-2 
        text-accent-500 bg-[rgba(255,255,255,0.80)] text-sm leading-6"
        >
          <p>
            {typeof date === 'string' ? date : formatDate(date)} at{' '}
            {typeof time === 'string' ? time : formatDateTime(time)}
          </p>
          <p>{place}</p>
        </div>
        {category ||
          (priority && (
            <div className="absolute top-0 flex gap-3">
              <p>{category}</p>
              <p>{priority}</p>
            </div>
          ))}
      </div>
      <div className="inline-block py-4 px-4 min-h-[200px]">
        <h3 className="text-[#1C1B1F] text-base font-medium">{title}</h3>
        <p className="max-h-[72px] text-[#49454F] mt-4 text-sm overflow-hidden">
          {text}
        </p>
        <Btn
          customClass={
            css.btn +
            ' absolute opacity-0 transition-all hover:bg-hover-500 transition-colors'
          }
          text="More info"
          onClick={() => onClick(id)}
        />
      </div>
    </li>
  );
};

EventsItem.defaultProps = {
  title: 'Gallery opening',
  text: ' Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
  img: image,
  date: 1700641454, // приклад значення timestamp
  time: 1700641454, // приклад значення timestamp
  place: 'Kyiv',
  onClick: () => {},
  category: '',
  priority: '',
};

EventsItem.propTypes = {
  itemClass: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  // date: PropTypes.number,
  // time: PropTypes.number,
  place: PropTypes.string,
  category: PropTypes.string,
  priority: PropTypes.string,
};

export default EventsItem;
