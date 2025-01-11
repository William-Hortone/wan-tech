import React, { useEffect, useState } from "react";
import { Introduction } from "../containers";
import { Footer, Infos, NavBar, NavBtn } from "../components";

const About = ({ setShowMenu, showMenu }) => {
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
      <section className="h-auto pb-20 overflow-x-hidden bg-white pageContainer">
        <section className=" pageWrapper">
          <Infos />
          <NavBtn setShowMenu={setShowMenu} />
          <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
          {isVisible && (
            <Introduction setShowMenu={setShowMenu} showMenu={showMenu} />
          )}
        </section>
        <span className="transitElement" />
      </section>
      {/* <Footer /> */}
      {isVisible && <Footer />}
    </>
  );
};

export default About;
