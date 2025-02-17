import React, { useEffect, useState } from "react";
import { Introduction } from "../containers";
import { Footer, Infos, NavBar, NavBtn } from "../components";

const About = ({ setShowMenu, showMenu, handleMenuToggle }) => {
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
        <section className="pageWrapper">
          <section className="bg-slate-300">
            <Infos />
            <NavBtn
              setShowMenu={setShowMenu}
              handleMenuToggle={handleMenuToggle}
            />
            <NavBar
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              handleMenuToggle={handleMenuToggle}
            />
            {isVisible && (
              <Introduction setShowMenu={setShowMenu} showMenu={showMenu} />
            )}
          </section>
        </section>
        <span className="transitElement" />
      </section>

      {isVisible && <Footer />}
    </>
  );
};

export default About;
