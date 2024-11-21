import React, { useState } from "react";
import {
  NavBar,
  TitleLogo,
  CircleAnimation,
  Avatar,
  Infos,
} from "./../../components";
import { FaRegEye } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="w-screen h-screen relative bg-primary p-">
        <Infos />
        {/* Logo */}
        <div className="w-full h-16 flex  justify-between items-center px-0 lg:px-16 ">
          <h2 className="font-fontBase text-md md:text-xl">WAN TECH</h2>
          {/* <p className=" hidden lg:block  font-fontAlt font-semibold text-lg  capitalize ">
            Agence de solutions digitales
          </p> */}

          {/* Toggle btn */}
          {/* <button
            onClick={() => setShowMenu(true)}
            className="top-8 right-9 flex items-center gap-2 cursor-pointer p-4 rounded-sm bg-[#C3ABFF] group"
          >
            <FaRegEye
              size={20}
              color="black"
              className="block group-hover:hidden transition-all duration-300 ease-in-out"
            />
            <GiSurroundedEye
              size={20}
              color="black"
              className="hidden group-hover:block transition-all duration-300 ease-in-out"
            />

            <p className="font-extrabold">Menu</p>
          </button> */}

          <button 
            onClick={() => setShowMenu(true)}
            className="app__button  flex items-center gap-2 cursor-pointer p-4 rounded-sm group"
          >
       

            <div className="app__button-content flex items-center justify-start bg-basic">
              <FaRegEye
                size={20}
                color="black"
                className="block group-hover:hidden transition-all duration-300 ease-in-out"
              />
              <GiSurroundedEye
                size={20}
                color="black"
                className="hidden group-hover:block transition-all duration-300 ease-in-out"
              />
              <p style={{ color: "white" }}>Menu</p>
              <p style={{ color: "white" }}>Menu </p>
            </div>
          </button>
        </div>

        {/* TitleLogo */}
        <div className="w-3/4  absolute bottom-0  left-1/2 transform   -translate-x-1/2  font-fontBase bg-gsreen-600">
          <div className="absolute top-1/2 left-1/2  transform  -translate-x-1/2 -translate-y-1/2   w-full h-auto">
            <TitleLogo />
          </div>
          <Avatar />
        </div>

        {/* Circle text animation */}
        <div className="absolute left-4 bottom-3">
          <CircleAnimation />
        </div>

        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
      </header>
    </>
  );
};

export default Header;
