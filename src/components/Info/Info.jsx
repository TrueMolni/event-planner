import React from 'react';
import PropTypes from 'prop-types';

import image from '../../shared/images/defaults/default-hor.png';
import Btn from 'shared/components/Btn';

const Info = ({
  img,
  text,
  title,
  date,
  time,
  place,
  containerClass,
  category,
  priority,
}) => {
  const formatDateTime = timestamp => {
    const dateObject = new Date(timestamp * 1000);

    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
  };

  const formatDate = timestamp => {
    const dateObject = new Date(timestamp * 1000);
    const options = { month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
  };

  const imageWrapperStyle = 'h-[168px] relative';
  const imageStyle = 'w-full h-full';
  const containerStyle =
    'flex flex-col items-center w-[272px] md:w-[332px] h-[480px] bg-[#fff]';

  return (
    <div>
      <h1 className="text-[#3F3F3F] font-semibold text-[24px] leading-9 ">
        {title}
      </h1>
      <div
        className={
          !containerClass
            ? containerStyle
            : containerStyle + ' ' + containerClass
        }
      >
        <div className={imageWrapperStyle}>
          <img className={imageStyle} src={img} alt={text} />

          {category ||
            (priority && (
              <div className="absolute top-0 flex gap-3">
                <p>{category}</p>
                <p>{priority}</p>
              </div>
            ))}
        </div>
        <div className="inline-block py-4 px-4">
          <p className="max-h-[72px] text-[#49454F] mt-2 mb-6 text-sm overflow-hidden">
            {text}
          </p>
          <div
            className=" bottom-0 w-full flex flex-wrap gap-3   py-2 
        text-accent-500 text-sm leading-6"
          >
            <div className="flex gap-3 ">
              <p className="py-[6px] px-3 shadow-base rounded-lg">{place}</p>
            </div>
            <p className="py-[6px] px-3 shadow-base rounded-lg">
              {typeof date === 'string' ? date : formatDate(date)} at{' '}
              {typeof time === 'string' ? time : formatDateTime(time)}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[240px] h-[32px]">
          <Btn
            text="Edit"
            customClass="w-[108px] justify-center px-4 py-2 text-center text-xs bg-[#fff] text-[#7B61FF] rounded
            border-[1px] border-solid border-current"
          />
          <Btn
            text="Delete event"
            customClass="w-[108px] justify-center px-1 py-2 text-center text-xs rounded"
          />
        </div>
      </div>
    </div>
  );
};

Info.defaultProps = {
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

Info.propTypes = {
  itemClass: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  date: PropTypes.number, // тип змінено на number
  time: PropTypes.number, // тип змінено на number
  place: PropTypes.string,
  category: PropTypes.string,
  priority: PropTypes.string,
};

export default Info;
