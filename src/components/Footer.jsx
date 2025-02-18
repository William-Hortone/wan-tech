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
  // useEffect(() => {
  //   // Animate footer background with parallax
  //   gsap.to(".footer-content", {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1.5,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".footer-wrapper",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  return (
    <>
      {/* <section className="footer-wrapperd relative -z-10 bg-black h-auto md:h-[200vh]"> */}
      {/* Fixed Footer */}
      <footer className="flex flex-col justify-between w-full h-screen overflow-hidden bg-black text-basic">
        <div className="relative flex flex-col justify-between h-screen px-4 py-8 md:p-16">
          {/* <div className="h-auto w-[150px]">
              <img className="object-cover w-full h-full" src={images.logo} alt="" />
            </div> */}
          <h3 className="w-3/4 md:w-1/2 footer-element font-fontAlt 2xl:text-2xl">
            Il n'y a qu'un pas à franchir entre votre idée et sa réalisation.
            Nous donnons vie à vos projets grâce à des solutions digitales sur
            mesure.
          </h3>

          <div className="flex flex-col-reverse justify-between md:flex-row ">
            <div className="flex flex-col md:mr-4 ">
              <h2 className="font-bold uppercase footer-element font-fontAlt">
                Contactez-nous
              </h2>

              <ul className="flex flex-col gap-2 mt-2">
                <div className="flex gap-4 font-medium ">
                  <FaWhatsapp size={20} color="#E2E2E2" />
                  <span>Whatsapp : +241 04967151</span>
                </div>
                <div className="flex gap-4 font-medium footer-element">
                  <IoLogoWechat size={20} color="#E2E2E2" />
                  <span>Wechat : +86 19128302455</span>
                </div>
                <Link className="flex gap-4 font-medium cursor-pointer footer-element">
                  <FaRegEnvelope size={20} color="#E2E2E2" />
                  <span>wantech@gmail.com</span>
                </Link>

                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100066250815544"
                  className="flex gap-4 font-medium cursor-pointer hover:text-white "
                >
                  <FaFacebookF size={20} color="#E2E2E2" />
                  <span>Facebook : Wan Tech </span>
                </a>
              </ul>
            </div>

            <div className="h-auto w-[100px] md:w-[250px]">
              <img
                className="object-cover w-full h-full"
                src={images.logo}
                alt="logo"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="font-semibold footer-element">WanTech@2025</p>
            <p className="font-semibold footer-element">Designed By WanTech</p>
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
      {/* </section> */}
    </>
  );
};

export default Footer;
