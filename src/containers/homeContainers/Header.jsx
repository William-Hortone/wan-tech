import React from "react";
import { Avatar, Infos, NavBar, NavBtn, TitleLogo } from "./../../components";

const Header = ({setShowMenu,showMenu}) => {
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="relative z-10 w-screen h-screen bg-primary ">
        <Infos />
        <NavBtn setShowMenu={setShowMenu} />
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
        {/* Logo */}
        {/* <div className="flex items-center justify-between w-full h-16 px-0 lg:px-16 ">
          <button
            className="flex items-center gap-2 rounded-sm cursor-pointer app__button group"
 
          >
            <div
              className="flex items-center w-[130px] md:w-[200px]  justify-start app__button-content bg-basic"
         
            >
              <p className="whitespace-nowrap " style={{ color: "white" }}>
                WAN TECH
              </p>
              <p className="whitespace-nowrap " style={{ color: "white" }}>
                WAN TECH{" "}
              </p>
            </div>
          </button>
         

          <button
            onClick={() => setShowMenu(true)}
            className="flex items-center gap-2 p-4 rounded-sm cursor-pointer app__button group"
            style={{ }}
          >
            <div className="flex w-[130px] md:w-[200px] items-center  app__button-content bg-basic">
              <FaRegEye
                size={20}
                color="black"
                className="block transition-all duration-300 ease-in-out group-hover:hidden"
              />
              <GiSurroundedEye
                size={20}
                color="black"
                className="hidden transition-all duration-300 ease-in-out group-hover:block"
              />
              <div className="w-auto h-[100%] bg-green-500 justify-self-end self-end">
                <p style={{ color: "white" }}>Menu</p>
                <p style={{ color: "white" }}>Menu </p>
              </div>
            </div>
          </button>
        </div> */}

        {/* TitleLogo */}
        <div className="absolute bottom-0 w-3/4 transform -translate-x-1/2 left-1/2 font-fontBase bg-gsreen-600">
          <div className="absolute w-full h-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <TitleLogo />
          </div>
          <Avatar />
        </div>

        {/* Circle text animation */}
        {/* <div className="absolute left-4 bottom-3">
          <CircleAnimation />
        </div> */}


      </header>
    </>
  );
};

export default Header;
