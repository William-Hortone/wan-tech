import React from "react";
import { Avatar, Infos, NavBar, NavBtn, TitleLogo } from "./../../components";

const Header = ({showMenu, handleMenuToggle}) => {

  return (
    <>
      <header className="relative z-10 w-screen h-screen bg-primary ">
        <Infos />
        <NavBtn handleMenuToggle={handleMenuToggle} />
        <NavBar  showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
   

        {/* TitleLogo */}
        <div className="absolute bottom-0 w-3/4 transform -translate-x-1/2 left-1/2 font-fontBase bg-gsreen-600">
          <div className="absolute w-full h-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <TitleLogo />
          </div>
          <Avatar />
        </div>


      </header>
    </>
  );
};

export default Header;
