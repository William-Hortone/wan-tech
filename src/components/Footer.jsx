// import React from "react";
// import { SiKingstontechnology } from "react-icons/si";

// const Footer = () => {
//   return (
//     <>
//       <section className="relative z-10 flex flex-col justify-between w-full h-screen p-16 text-black bg-basic">
//         <h3 className="w-1/2 font-fontAlt 2xl:text-2xl">
//           Il n'y a qu'un pas à franchir entre votre idée et sa réalisation Nous
//           donnons vie à vos projets grâce à des solutions digitales sur mesure
//         </h3>
//         <div className="flex justify-between mt-8">
//           <div className="mr-4">
//             <h2 className="font-bold uppercase font-fontAlt ">
//               Contactez-nous
//             </h2>
//             <h3 className="font-medium">wantech@gmail.com</h3>
//             <h2 className="mt-4 font-bold uppercase font-fontAlt">
//               Liens Rapides
//             </h2>
//             <h3 className="font-medium">Acceuil</h3>
//             <h3 className="font-medium">A propos</h3>
//             <h3 className="font-medium">Projets</h3>
//           </div>

//           <div>
//             <SiKingstontechnology size={300} color="#1E1E1E" />
//           </div>
//         </div>

//         <div className="flex justify-between">
//           <p>WanTech@2025</p>
//           <p>Copyright©2025</p>
//         </div>

//         <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-8 left-1/2">
//           <p className="font-opensans">Agence de solutions digitales</p>
//           <h2 className="font-fontBase 2xl:text-5xl">WAN TECH</h2>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;
import React, { useEffect } from "react";
import { SiKingstontechnology } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animate footer background with parallax
    gsap.to(".footer-content", {
      y: 0, // Move content into view
      opacity: 1, // Fade in content
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-wrapper", // Target the footer section
        start: "top bottom", // Animation starts when the top of footer-wrapper enters viewport
        end: "bottom top", // Ends when footer-wrapper exits viewport
        scrub: 1, // Smooth scroll effect
      },
    });

    // Staggered animation for each child element in footer
    // gsap.from(".footer-element", {
    //   y: 50, // Start below viewport
    //   opacity: 0, // Start invisible
    //   stagger: 0.3, // Delay each element by 0.3s
    //   duration: 1.2, // Animation duration
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: ".footer-wrapper", // Target the footer section
    //     start: "top bottom", // Start animation when footer enters
    //   },
    // });

    // Icon rotation for visual impact
    // gsap.from(".footer-icon", {
    //   rotate: -45, // Rotate icon
    //   scale: 0.8, // Scale down
    //   opacity: 0, // Start invisible
    //   duration: 1.5,
    //   ease: "elastic.out(1, 0.5)", // Elastic bounce effect
    //   scrollTrigger: {
    //     trigger: ".footer-wrapper",
    //     start: "top bottom",
    //   },
    // });
  }, []);

  return (
    <>
      {/* Main Footer Wrapper */}
      <section className="footer-wrapper relative -z-10 bg-basic h-[200vh]">
        {/* Fixed Footer */}
        <footer className="fixed bottom-0 left-0 flex flex-col justify-between w-full h-screen overflow-hidden text-white -z-10 bg-basic">
          <div className="relative flex flex-col justify-between h-full p-16 translate-y-full opacity-0 footer-content">
            <h3 className="w-1/2 footer-element font-fontAlt 2xl:text-2xl">
              Il n'y a qu'un pas à franchir entre votre idée et sa réalisation.
              Nous donnons vie à vos projets grâce à des solutions digitales sur
              mesure.
            </h3>
            <div className="flex justify-between mt-8">
              <div className="mr-4">
                <h2 className="font-bold uppercase footer-element font-fontAlt">
                  Contactez-nous
                </h2>
                <h3 className="font-medium footer-element">wantech@gmail.com</h3>
                <h2 className="mt-4 font-bold uppercase footer-element font-fontAlt">
                  Liens Rapides
                </h2>
                <h3 className="font-medium footer-element">Acceuil</h3>
                <h3 className="font-medium footer-element">A propos</h3>
                <h3 className="font-medium footer-element">Projets</h3>
              </div>

              <div>
                <SiKingstontechnology
                  className="footer-icon"
                  size={300}
                  color="#fff"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <p className="footer-element">WanTech@2025</p>
              <p className="footer-element">Copyright©2025</p>
            </div>

            <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-8 left-1/2">
              <p className="footer-element font-opensans">
                Agence de solutions digitales
              </p>
              <h2 className="footer-element font-fontBase 2xl:text-5xl">
                WAN TECH
              </h2>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
