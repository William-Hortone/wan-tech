import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Title } from "../../components";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";

import video1 from "../../assets/video1.mp4"; 

gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const textRef = useRef(null);

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
          end: "top 30%",
          toggleActions: "play none none play",
        },
      }
    );

    // Timeline to set the position of the container
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

    // Animation for the expanding div
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

  // The function to go to the projects page
  const handleSeeMore = () => {
    // the scaling animation
    gsap.to(buttonRef.current, {
      scale: 14,
      duration: 2,

      ease: "ease-in-out",
      onStart: () => {
        //  opacity animation for the text
        gsap.to(textRef.current, {
          opacity: 0,
          duration: 2.5,
          ease: "ease",
        });
      },
      onComplete: () => {
        setShowMore(true);
        setTimeout(() => {
          navigate("/projects");
        }, 400);
      },
    });
  };

  return (
    <section className="w-full h-[200vh] relative bg-black pb-8 z-20">
      <section className="big-section w-full h-[100vh] relative bg-black z-10">
        <div className="p-8">
          <Title title="Projets" color="white" />
        </div>
        <h2 className="absolute text-2xl text-center text-white uppercase transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-fontAlt md:text-4xl">
          Nous réalisons les projets de vos rêves, en transformant vos idées en
          solutions concrètes et innovantes.
        </h2>
        <div className="expanding-div w-[25%] md:w-[13%] h-24 bg-white absolute left-8 bottom-8">
          <video
            className="object-cover w-full h-full" 
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video
          </video>
        </div>
      </section>

      {/* See more project */}
      <section className="flex flex-col items-center justify-center w-full h-screen app__desc-content gap-36 bg-primary">
        <div className="">
          <h3 className="text-3xl leading-10 text-center uppercase content-text font-fontBase 2xl:text-5xl md:text-3xl bg-primary">
            <span>Parcourez notre portfolio et découvrez</span>
          </h3>
          <h3 className="text-3xl leading-10 text-center uppercase content-text font-fontBase 2xl:text-5xl md:text-3xl bg-primary">
            <span>nos réalisations.</span>
          </h3>
        </div>

        {/* See more button */}
        <div
          ref={buttonRef}
          onClick={handleSeeMore}
          className={
            showMore
              ? "relative w-[15%] aspect-w-1 aspect-h-1 bg-[#000000] rounded-md content-seeMore show-more"
              : "relative w-[30%] md:w-[20%]  lg:w-[15%] aspect-w-1 aspect-h-1 bg-[#000000] rounded-md content-seeMore"
          }
        >
          <img
            src={images.seeMore}
            alt="See More"
            className="object-cover w-full h-full rounded-md"
          />
          <p
            ref={textRef}
            className={
              showMore
                ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-fontAlt  font-bold uppercase remove-text"
                : "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10px] md:text-lg font-bold font-fontAlt uppercase"
            }
          >
            Voir Plus
          </p>
        </div>
      </section>
    </section>
  );
};

export default ProjectView;
