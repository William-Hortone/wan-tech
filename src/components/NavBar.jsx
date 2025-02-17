import React, { useEffect, useRef } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeClosed } from "react-icons/rx";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import images from "../constants/images";

const NavBar = ({ showMenu, handleMenuToggle }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    if (showMenu) {
      gsap.fromTo(
        lettersRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, [showMenu]);

  return (
    <>
      <nav
        className={
          !showMenu
            ? "h-screen w-1/4 flex flex-col -right-full absolute top-0  "
            : "slide-in-right h-screen w-full md:w-1/4 flex flex-col fixed top-0 p-4 bg-black z-10"
        }
      >
        {/* Logo */}
        <div className="w-[70px] h-[70px] absolute z-10 flex items-center gap-2 font-medium top-3 left-3  ">
          <img
            src={images.logo}
            className="object-cover w-full h-full"
            alt="logo"
          />
        </div>

        {/* Close btn */}
        <button
          onClick={handleMenuToggle}
          className="absolute z-10 flex items-center gap-2 font-medium top-8 right-9 group"
        >
          <GoEyeClosed
            className="block group-hover:hidden"
            color="white"
            size={20}
          />
          <RxEyeClosed
            className="hidden group-hover:block"
            color="white"
            size={20}
          />
          <p className="font-extrabold text-white">Fermer</p>
        </button>

        {/* Title logo */}
        <h2 className="absolute flex flex-col items-center text-4xl right-8 top-1/4 font-fontBase text-basic">
          {["W", "A", "N", "- ", "T", "E", "C", "H"].map((char, index) => (
            <span
              key={index}
              className="block"
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {char}
            </span>
          ))}
        </h2>

        <ul className="relative flex flex-col justify-center h-screen gap-12 p-">
          <Link
            to="/"
            onClick={handleMenuToggle}
            className="text-2xl uppercase transition duration-300 ease-in-out font-fontAlt md:text-3xl text-zinc-400 hover:text-white hover:font-bold "
          >
            Accueil
          </Link>
          <Link
            to="/about"
            onClick={handleMenuToggle}
            className="text-2xl uppercase transition duration-300 ease-in-out font-fontAlt md:text-3xl text-zinc-400 hover:text-white hover:font-bold"
          >
            A Propos
          </Link>
          <Link
            to="/projects"
            onClick={handleMenuToggle}
            className="text-2xl uppercase transition duration-300 ease-in-out font-fontAlt md:text-3xl text-zinc-400 hover:text-white hover:font-bold"
          >
            Projets
          </Link>
        </ul>

        <p className="text-lg text-white font-fontAlt">wantech@gmail.com</p>
      </nav>
    </>
  );
};

export default NavBar;
