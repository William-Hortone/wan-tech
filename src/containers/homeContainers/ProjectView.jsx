import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Title } from "../../components";

gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
  useEffect(() => {
    const expandingDiv = document.querySelector(".expanding-div");
    const bigSection = document.querySelector(".big-section");

    // Create a timeline for the expanding div animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: expandingDiv,
        start: "top 80%",
        end: "top 30%",
        scrub: 0.3, 
        onEnter: () => {
          bigSection.style.position = "fixed";
          bigSection.style.top = "0";
        },
        onLeave: () => {
          bigSection.style.position = "relative";
        },
        onEnterBack: () => {
          bigSection.style.position = "relative";
        },
        onLeaveBack: () => {
          bigSection.style.position = "relative";
        },
      },
    });

    tl.to(expandingDiv, {
      width: "90%",
      height: "80vh",
      left: "50%",
      top: "50%",
      translateX: "-50%",
      translateY: "-50%",
      zIndex: 10,
      duration: 1,
    });

    return () => {
      tl.kill();
      bigSection.style.position = "relative";
    };
  }, []);

  return (
    <section className="w-full h-[200vh] relative bg-black pb-8">
      <section className="big-section w-full h-[100vh] relative bg-black">
        <div className="p-8">
          <Title title="Projets" color="white" />
        </div>

        <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center font-fontAlt md:text-4xl">
          Nous réalisons les projets de vos rêves, en transformant vos idées en
          solutions concrètes et innovantes.
        </h2>

        <div className="expanding-div w-[13%] h-24 bg-white absolute left-8 bottom-8"></div>
      </section>
    </section>
  );
};

export default ProjectView;
