import React from "react";
import { Introduction } from "../containers";
import { Footer, Infos, NavBar, NavBtn } from "../components";

const About = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <section className="h-auto pb-20 bg-white">
        <Infos />
        <NavBtn setShowMenu={setShowMenu} />
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Introduction setShowMenu={setShowMenu} showMenu={showMenu} />
      </section>
      <Footer />
    </>
  );
};

export default About;
