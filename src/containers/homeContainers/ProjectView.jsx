import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Title } from "../../components";

gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
  useEffect(() => {
    gsap.fromTo(
      ".expanding-div",
      { width: "13%", height: "6rem", left: "8%", bottom: "8%" }, // Initial state (bottom left)
      {
        width: "100%", // End state width
        height: "80vh", // Adjust height based on content
        left: "50%", // Center horizontally
        bottom: "50%", // Center vertically
        translateX: "-50%", // Adjust position to truly center
        translateY: "50%", // Move it up to align vertically
        scrollTrigger: {
          trigger: ".expanding-div",
          start: "top 80%", // When the top of the div hits 80% of the viewport
          end: "top 30%", // When the top of the div hits 30% of the viewport
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="w-full h-[200vh] relative bg-black pb-8">
        <section className="w-full h-[100vh] relative bg-black">
          <div className="p-8">
            <Title title="Projets" color="white" />
          </div>

          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center font-fontAlt md:text-4xl">
            Nous réalisons les projets de vos rêves, en transformant vos idées en
            solutions concrètes et innovantes.
          </h2>

          {/* View projects */}
          <div className="expanding-div w-[13%] h-24 bg-white absolute left-8 bottom-8"></div>
        </section>
      </section>
    </>
  );
};

export default ProjectView;
