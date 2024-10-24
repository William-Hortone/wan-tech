import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TitleLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;

    // Split the text into individual spans for each letter
    const letters = logo.textContent.split("");
    logo.innerHTML = letters
      .map((letter) => `<span class="letter">${letter}</span>`)
      .join("");

    //  Animation to change color on scroll
    const animation = gsap.fromTo(
      ".letter",
      { color: "#ffff" },
      {
        color: "#1E1E1E",
        scrollTrigger: {
          trigger: logo,
          start: "top 30%",
          end: "bottom 10%",
          scrub: true,
        },
        stagger: 0.1,
        ease: "none",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animation.kill();
    };
  }, []);

  return (
    <>
      <h1 ref={logoRef} className="text-stroke text-6vw flex  justify-between">
      <span> WAN </span>  <span> TECH </span>
      </h1>
    </>
  );
};

export default TitleLogo;
