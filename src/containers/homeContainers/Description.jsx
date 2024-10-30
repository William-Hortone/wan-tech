import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../../components";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  useEffect(() => {
    const textSpans = document.querySelectorAll(".content-text span");

    //  GSAP timeline for staggered animations
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
          end: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-32 md:px-[20%] bg-primary">
      <div className="app__desc-content">
        <h3 className="content-text  font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
          <span>Il n'y a qu'un pas à franchir entre votre idée et</span>
        </h3>
        <h3 className="content-text  font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
          <span>sa réalisation : contactez-nous.</span>
        </h3>
        <h3 className="content-text  font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
          <span>Nous donnons vie à vos projets grâce à des </span>
        </h3>
        <h3 className="content-text  font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
          <span>solutions digitales sur mesure : applications</span>
        </h3>
        <h3 className="content-text  font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center bg-primary leading-10">
          <span>mobiles, sites web, logos et affiches</span>
        </h3>
      </div>

      <Button colorText="#FFFFFF" title="Voir Plus" />
    </section>
  );
};

export default Description;
