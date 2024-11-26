import React, { useEffect } from "react";
import { Infos, NavBar, NavBtn, PageTitle } from "../../components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Introduction = ({ setShowMenu, showMenu }) => {
  useEffect(() => {
    const divAnimation = gsap.context(() => {
      gsap.fromTo(
        ".expanding-div", 
        { width: "65%" }, 
        {
          width: "90%",
          duration: 1.5,
          ease: "power2.out", 
          scrollTrigger: {
            trigger: ".expanding-div",
            start: "top 80%", 
            end: "top 30%", 
            scrub: true, 
          },
        }
      );
      gsap.fromTo(
        ".h2-1",
        { x: "100vw" },
        {
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content", 
            start: "top 80%",
            end: "top 30%",
            scrub: true, 
          },
        }
      );

      // Animate the second h2 from left to right
      gsap.fromTo(
        ".h2-2",
        { x: "-100vw" }, 
        {
          x: 0, 
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Animate the third h2 from right to left
      gsap.fromTo(
        ".h2-3",
        { x: "100vw" },
        {
          x: 0, 
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => divAnimation.revert();
  }, []);
  return (
    <>
      <section>
        <Infos />
        <NavBtn setShowMenu={setShowMenu} />
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />
        <div className="flex flex-col items-center justify-center w-full gap-16 mt-28 ">
          <PageTitle title="A-propos" />
          <div className="expanding-div h-[90vh] bg-basic"></div>
        </div>

        <div className="w-1/2 p-16">
          <p className="font-sans text-4xl ">
            Nous sommes une agence créative spécialisée dans le développement
            d'applications mobiles, la création de sites web sur mesure, la
            conception de logos percutants et la réalisation d'affiches
            visuellement impactantes. Nous transformons vos idées en solutions
            digitales innovantes pour faire briller votre marque.
          </p>
        </div>

        {/* Content Section with Animated h2s */}
        <div className="flex flex-col items-center gap-8 content">
          <h2 className="font-bold text-8xl font-fontAlt h2-1">
            NOUS DONNONS VIE
          </h2>
          <div>
            <h2 className="font-bold text-8xl font-fontAlt h2-2">
              A TOUTES VOS
            </h2>
          </div>
          <h2 className="font-bold text-8xl font-fontAlt h2-3">
            IDEES ET PROJECTS
          </h2>
        </div>
      </section>
    </>
  );
};

export default Introduction;
