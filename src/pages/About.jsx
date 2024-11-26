import React from "react";
import { Introduction } from "../containers";

const About = ({ setShowMenu, showMenu }) => {
  return (
    <section className="bg-white h-[600vh]">
      <Introduction setShowMenu={setShowMenu} showMenu={showMenu} />
    </section>
  );
};

export default About;
