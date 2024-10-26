import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceItem, Title } from "../../components";

gsap.registerPlugin(ScrollTrigger);

const ProjectView = () => {
  useEffect(() => {
    const serviceItems = gsap.utils.toArray(".service-item");
    
    //  Animation of each service item
    serviceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: -80 * index,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 35%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="w-full h-auto bg-primary pb-8">
        <div className="p-8">
          <Title title="Services" />
        </div>

        <div className="w-full h-auto flex flex-col">
          <ServiceItem
            title="SITES WEB"
            text="Nous concevons des sites web sur mesure qui reflètent l'identité de votre marque et répondent à vos objectifs commerciaux. Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce ou d'un blog,"
            img=""
            bgColor="#1E1E1E"
            color="#ffffff"
            className="service-item"
          />
          <ServiceItem
            title="APPLICATIONS MOBILE"
            text="Nous concevons des applications mobiles innovantes, parfaitement adaptées aux besoins uniques de votre entreprise et de vos utilisateurs. Nous créons des applications intuitives, performantes et visuellement attrayantes, qu'elles soient destinées à iOS, Android ou aux deux."
            img=""
            bgColor="#C3ABFF"
            color="#ffffff"
            className="service-item"
          />
          <ServiceItem
            title="LOGO & AFFICHES"
            text="Votre image de marque commence par un logo percutant et des affiches attrayantes. Nous travaillons en étroite collaboration avec vous pour comprendre vos valeurs et votre vision, afin de créer des éléments graphiques qui captivent votre audience."
            img=""
            bgColor="#D9D9D9"
            color="#000000"
            className="service-item"
          />
        </div>
      </section>
    </>
  );
};

export default ProjectView;
