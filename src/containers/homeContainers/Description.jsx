import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Button } from "../../components";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  useEffect(() => {
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
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="w-full max-w-full overflow-x-hidden h-screen flex flex-col justify-center items-center gap-32 md:px-[20%] bg-primary">
      <div className="app__desc-content">
        <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>Il n'y a qu'un pas à franchir entre votre idée et</span>
        </h3>
        <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>sa réalisation : contactez-nous.</span>
        </h3>
        <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>Nous donnons vie à vos projets grâce à des </span>
        </h3>
        <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>solutions digitales sur mesure : applications</span>
        </h3>
        <h3 className="leading-10 text-center uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>mobiles, sites web, logos et affiches</span>
        </h3>
      </div>

      <Button
        link="/about"
        colorText="#FFFFFF"
        width="250px"
        title="Voir Plus"
      />
    </section>
  );
};

export default Description;
