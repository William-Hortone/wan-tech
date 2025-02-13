import React, { useEffect } from "react";
import { SiKingstontechnology } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaRegEnvelope, FaFacebookF } from "react-icons/fa6";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animate footer background with parallax
    gsap.to(".footer-content", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      {/* Main Footer Wrapper */}
      <section className="footer-wrapper relative -z-10 bg-black h-[200vh]">
        {/* Fixed Footer */}
        <footer className="fixed bottom-0 left-0 flex flex-col justify-between w-full h-screen overflow-hidden bg-black z-7 text-basic">
          <div className="relative flex flex-col justify-between h-full px-4 py-8 translate-y-full opacity-0 md:p-16 footer-content">
            {/* <div className="h-auto w-[150px]">
              <img className="object-cover w-full h-full" src={images.logo} alt="" />
            </div> */}
            <h3 className="w-3/4 md:w-1/2 footer-element font-fontAlt 2xl:text-2xl">
              Il n'y a qu'un pas à franchir entre votre idée et sa réalisation.
              Nous donnons vie à vos projets grâce à des solutions digitales sur
              mesure.
            </h3>

            <div className="flex justify-between mt-">
              <div className="flex flex-col mr-4 ">
                <h2 className="font-bold uppercase footer-element font-fontAlt">
                  Contactez-nous
                </h2>

                {/* <h2 className="mt-4 font-bold uppercase footer-element font-fontAlt">
                  Liens Rapides
                </h2> */}
                <div className="flex gap-4 font-medium hover:cursor-pointer footer-element">
                  <FaWhatsapp size={20} color="#E2E2E2" />
                  <span>Whatsapp : +241 04967151</span>
                </div>
                <div className="flex gap-4 font-medium hover:cursor-pointer footer-element">
                  <IoLogoWechat size={20} color="#E2E2E2" />
                  <span>Wechat : +86 19128302455</span>
                </div>
                <div className="flex gap-4 font-medium cursor-pointer footer-element">
                  <FaRegEnvelope size={20} color="#E2E2E2" />
                  <span>wantech@gmail.com</span>
                </div>
                <div className="flex gap-4 font-medium cursor-pointer footer-element">
                  <FaFacebookF size={20} color="#E2E2E2" />
                  <span>Facebook : Wan Tech </span>
                </div>
                <h3 className="font-medium footer-element">
                  wantech@gmail.com
                </h3>
                <Link
                  to="/about"
                  className="font-medium cursor-pointer footer-element"
                >
                  A propos
                </Link>
                <Link
                  to="/projects"
                  className="font-medium cursor-pointer footer-element"
                >
                  Projets
                </Link>
              </div>

              <div className="h-auto  w-[250px]">
                <img
                  className="object-cover w-full h-full"
                  src={images.logo}
                  alt=""
                />

                {/* <SiKingstontechnology className="text-basic footer-icon size-[100px] md:size-60 lg:size-80" /> */}
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <p className="font-semibold footer-element">WanTech@2025</p>
              <p className="font-semibold footer-element">
                Designed By WanTech
              </p>
            </div>

            <div className="absolute flex-col items-center hidden -translate-x-1/2 md:flex bottom-8 left-1/2">
              <p className="footer-element font-opensans">
                Agence de solutions digitales
              </p>
              <h2 className="footer-element font-fontBase md:text-3xl lg:text-5xl">
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
