import { useState } from 'react';

import sprite from '../../../shared/images/icons/sprite.svg';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = ({ target }) => {
    setSearchValue(target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  const icons = ['#icon-search', '#icon-cross-small'];

  return (
    <label
      className="flex gap-4 w-[272px] mm:w-full h-[48px] p-3 text-sm leading-[14px] 
    text-accent-500 shadow-base rounded"
    >
      <button>
        <svg className="w-6 h-6">
          <use href={sprite + icons[0]}></use>
        </svg>
      </button>
      <input
        value={searchValue}
        placeholder="Search by keywords"
        onChange={searchHandler}
      />
      {searchValue && (
        <button onClick={clearSearch}>
          <svg className="w-6 h-6">
            <use href={sprite + icons[1]}></use>
          </svg>
        </button>
      )}
    </label>
  );
};

export default Search;

/* 
Keyword (Search advanced)
color: #7B61FF;

font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
