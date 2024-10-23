import React, { useState } from "react";
import { NavBar, TitleLogo, CircleAnimation } from "./../../components";
import { FaRegEye } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";

const Header = () => {
  const[showMenu, setShowMenu]= useState(false)
  return (
    <>
      <header className="w-screen h-screen relative bg-primary p-2">
        {/* Logo */}
        <div className="w-full h-auto flex flex-col items-center py-2 ">
          <h2 className="font-fontBase text-5xl">WAN TECH</h2>
          <p className="font-opensans font-medium  capitalize ">
            Agence de solutions digitales
          </p>
        </div>

        {/* TitleLogo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fontBase ">
          <TitleLogo />
        </div>

        {/* Circle text animation */}
        <div className="absolute left-4 bottom-3">
          <CircleAnimation />
        </div>

        {/* Toggle btn */}
        <button onClick={() =>setShowMenu(true)} className="absolute top-8 right-9 flex items-center gap-2 cursor-pointer group">
          {/* First icon (hidden on hover of button) */}
          <FaRegEye
            size={20}
            color="black"
            className="block group-hover:hidden transition-all duration-300 ease-in-out"
          />
          
          {/* Second icon (visible on hover of button) */}
          <GiSurroundedEye
            size={20}
            color="black"
            className="hidden group-hover:block transition-all duration-300 ease-in-out"
          />

          <p className="font-extrabold">Menu</p>
        </button>

        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
      </header>
    </>
  );
};

export default Header;
