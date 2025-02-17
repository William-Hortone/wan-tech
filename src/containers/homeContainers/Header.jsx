import React from "react";
import { Avatar, Infos, NavBar, NavBtn, TitleLogo } from "./../../components";

const Header = ({setShowMenu,showMenu, handleMenuToggle}) => {
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="relative z-10 w-screen h-screen bg-primary ">
        <Infos />
        <NavBtn setShowMenu={setShowMenu} handleMenuToggle={handleMenuToggle} />
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
   

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
