import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { PageTitle } from "../../components";
import images from "../../constants/images";
import video1 from "../../assets/video1.mp4";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
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

      // Animate the third h2 from right to left
      gsap.fromTo(
        ".h2-3",
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
    });

    return () => divAnimation.revert();
  }, []);
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center w-full gap-16 mt-28 ">
          <PageTitle title="A-propos" />
          <div className="expanding-div h-[50vh] md:h-[90vh] bg-basic">
            <img
              className="object-cover w-full h-full rounded-md"
              src={images.img1}
              alt="banner"
            />
          </div>
        </div>

        <div className="w-full p-6 my-20 sm:p-8 lg:p-16 sm:w-3/4 lg:w-1/2 ">
          <p className="font-sans text-xl md:text-2xl xl:text-4xl">
            Nous sommes une agence créative spécialisée dans le développement
            d'applications mobiles, la création de sites web sur mesure, la
            conception de logos percutants et la réalisation d'affiches
            visuellement impactantes. Nous transformons vos idées en solutions
            digitales innovantes pour faire briller votre marque.
          </p>
        </div>

        {/* Content Section with Animated h2s */}
        <div className="flex flex-col items-center gap-8 pb-20 mt-20 content ">
          <h2 className="text-3xl font-bold md:text-6xl lg:text-8xl font-fontAlt h2-1">
            NOUS DONNONS VIE
          </h2>
          <div className="relative h2-2">
            <h2 className="text-3xl font-bold md:text-6xl lg:text-8xl font-fontAlt ">A TOUTES VOS</h2>
            <div className="absolute top-1/2 transform rounded-xl -translate-y-1/2  left-[100%] w-[150px] h-[85px] md:w-[300px] md:h-[170px] bg-gradient-to-r from-green-500 to-blue-500">
              <video
                className="object-cover w-full h-full rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video
              </video>
            </div>
          </div>
          <h2 className="text-3xl font-bold md:text-6xl lg:text-8xl font-fontAlt h2-3">
            IDEES ET PROJETS
          </h2>
        </div>
      </section>
    </>
  );
};

export default Introduction;
