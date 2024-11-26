import React from "react";
import { Infos, NavBar, NavBtn, PageTitle } from "../components";

const Projects = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <section className="h-auto pb-20 bg-white">
        <Infos />
        <NavBtn setShowMenu={setShowMenu} />
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
        
        <div className="flex flex-col items-center justify-center w-full gap-16 mt-28">
          <PageTitle title="Portfolio" />
        </div>
      </section>
    </>
  );
};

export default Projects;
