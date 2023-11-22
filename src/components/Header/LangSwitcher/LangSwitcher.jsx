import React, { useState } from 'react';

const LangSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = event => {
    setSelectedLanguage(event.target.value);
    // Тут ви також можете додати логіку для зміни мови в вашому додатку
  };

  return (
    <div className="mm:absolute mm:right-[22px] ml-[22px] inline-block text-left ">
      <select
        className="block rounded-lg appearance-none text w-full shadow-base bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12.118l-6.94-6.94a1 1 0 0 0-1.415 1.415L10 14.948l8.355-8.355a1 1 0 0 0-1.415-1.415L10 12.118z" />
        </svg>
      </div>
    </div>
  );
};

export default LangSwitcher;
/*color: #3F3F3F;


font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%;  16px 

border-radius: 8px;
background: #FFF;


box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
*/
