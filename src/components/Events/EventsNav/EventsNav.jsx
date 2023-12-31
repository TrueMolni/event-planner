import React from 'react';
import { useNavigate } from 'react-router-dom';

import IconBtn from '../../../shared/components/IconBtn';

const EventsNav = () => {
  const navigate = useNavigate();
  const goToAddEventPage = () => {
    navigate('/add-event');
  };
  const iconPath = ['#icon-filters-2', '#icon-filters-3', '#icon-plus'];

  return (
    <div className="flex justify-end items-center gap-[24px] mb-10">
      <IconBtn icon={iconPath[1]} customClass="cursor-default disabled" />
      {/* <IconBtn icon={iconPath[0]} /> */}
      <button className="cursor-default disabled">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20"
            stroke="#3F3F3F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <IconBtn
        customClass={'bg-accent-500 hover:bg-hover-500 transition-colors'}
        icon={iconPath[2]}
        onClick={goToAddEventPage}
      />
    </div>
  );
};

export default EventsNav;
