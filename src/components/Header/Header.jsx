import React from "react";

import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import Search from "./Search";

const Header = (props) => {
  return (
    <header
      className="
    flex flex-wrap shrink-0 gap-6 justify-between h-[168px] p-6 border-b border-accent-500
     md:px-10 md:pt-[26px] md:pb-[18px]"
    >
      <Logo />
      <LangSwitcher />
      <Search />
    </header>
  );
};

export default Header;
/*
display: flex;
width: 272px;
height: 48px;
justify-content: center;
align-items: center;
flex-shrink: 0;


box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
*/
