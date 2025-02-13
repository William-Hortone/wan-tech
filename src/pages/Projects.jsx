import React, { useEffect, useState } from "react";
import { Footer, Infos, NavBar, NavBtn } from "../components";
import { Portfolio } from "../containers";

const Projects = ({ setShowMenu, showMenu }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="h-auto min-h-[100vh] overflow-x-hidden bg-black pageContainer">
        {isVisible && (
          <section className="bg- pageWrapper">
            <section className="bg-slate-300">
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
          </section>
        )}
        <span className="transitElement" />
      </section>
      {isVisible && <Footer />}
    </>
  );
};

export default Projects;
