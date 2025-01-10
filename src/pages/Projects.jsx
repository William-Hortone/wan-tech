import React from "react";
import { Footer, Infos, NavBar, NavBtn } from "../components";
import { Portfolio } from "../containers";

const Projects = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <section className="h-auto pb-20 overflow-x-hidden bg-slate-300 ">
        <Infos />
        <NavBtn setShowMenu={setShowMenu} />
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />

        {/* <div className="flex flex-col items-center justify-center w-full gap-16 mt-28">
          <PageTitle title="Portfolio" />
        </div> */}

        {/* Wrap Portfolio in a container with overflow: hidden */}
        <div className="">
          <Portfolio />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
