import React, { useEffect, useState } from "react";
import {
  CarouselProjects,
  Footer,
  Infos,
  NavBar,
  NavBtn,
  PageTitle,
} from "../components";

const Projects = ({ showMenu, handleMenuToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="h-auto min-h-[100vh] overflow-x-hidden pb-4 bg-black pageContainer">
        {isVisible && (
          <section className="pageWrapper">
            <section className="pb-20 bg-slate-300">
              <Infos />
              <NavBtn handleMenuToggle={handleMenuToggle} />
              <NavBar showMenu={showMenu} handleMenuToggle={handleMenuToggle} />

              <div className="flex flex-col items-center justify-center w-full gap-4 my-4">
                <PageTitle title="Portfolio" />
              </div>

              {/* Portfolio  content */}
              <CarouselProjects />
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
