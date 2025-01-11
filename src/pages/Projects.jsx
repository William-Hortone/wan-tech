import React, { useEffect, useState } from "react";
import { Footer, Infos, NavBar, NavBtn } from "../components";
import { Portfolio } from "../containers";

const Projects = ({ setShowMenu, showMenu }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to make the component visible after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true); // Update state to show the component after 5s
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty array ensures it runs only once after component mounts

  return (
    <>
      <section className="h-auto pb-20 overflow-x-hidden bg-slate-300 pageContainer">
        {isVisible && (
          <section className="bg- pageWrapper">
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
        )}
        <span className="transitElement" />
      </section>
      {isVisible && <Footer />}
    </>
  );
};

export default Projects;
