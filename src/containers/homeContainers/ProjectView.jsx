import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Title } from "../../components";
import images from "../../constants/images";

gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
  useEffect(() => {
    const expandingDiv = document.querySelector(".expanding-div");
    const bigSection = document.querySelector(".big-section");
    const textSpans = document.querySelectorAll(".content-text span");

    gsap.fromTo(
      textSpans,
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".app__desc-content",
          start: "top 80%",
          end: "top 30%", // Change this for better animation timing
          toggleActions: "play none none play",
        },
      }
    );

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
      duration: 2,
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

      {/* See more project */}
      {/* <section className="w-full h-screen app__desc-content flex flex-col items-center  justify-center gap-36  bg-primary">
        <div className="">
          <h3 className="content-text font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
            <span>Parcourez notre portfolio et découvrez</span>
          </h3>
          <h3 className="content-text font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
            <span>nos réalisations.</span>
          </h3>
        </div>

        See more
        <div class="relative w-[15%] aspect-w-1 aspect-h-1 bg-[#000000] rounded-md">
          <img
            src={images.seeMore}
            alt="See More"
            class="object-cover w-full h-full rounded-md"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-mdc font-opensans uppercase">
            Voir Plus
          </p>
        </div>
      </section> */}
    </section>
  );
};

export default ProjectView;
