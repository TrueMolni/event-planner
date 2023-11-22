import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <button className="flex gap-2 mb-6 text-accent-500" onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12L20 12M4 12L10 6M4 12L10 18"
          stroke="#7B61FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );
};

export default BackBtn;
