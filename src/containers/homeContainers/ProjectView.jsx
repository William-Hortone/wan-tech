import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { ViewParallax } from "../../components";

gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
  return (
    <section className="z-20 w-full max-w-full overflow-x-hidden h-auto pb-8 bg-black">
      <ViewParallax />
    </section>
  );
};

export default ProjectView;
