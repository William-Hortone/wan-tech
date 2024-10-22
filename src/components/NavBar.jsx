import React, { useEffect, useRef } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeClosed } from "react-icons/rx";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const NavBar = ({ showMenu, setShowMenu }) => {
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
            ? "h-screen w-1/4 flex flex-col -right-full absolute top-0 p-4 bg-orange-500"
            : "slide-in-right h-screen w-1/4 flex flex-col absolute top-0 p-4 bg-basic"
        }
      >
        {/* Title logo */}
        <h2 className="absolute right-8 top-1/4 flex flex-col items-center text-4xl font-fontBase">
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

        {/* Close btn */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-8 right-9 flex items-center gap-2 font-medium z-10 group"
        >
          <GoEyeClosed className="block group-hover:hidden" color="black" size={20} />
          <RxEyeClosed className="hidden group-hover:block" color="black" size={20} />
          <p>Fermer</p>
        </button>

        <ul className=" h-screen flex flex-col justify-center gap-12 p- relative  ">
          <Link to="" className="font-fontAlt text-3xl">
            Accueil
          </Link>
          <Link to="" className="font-fontAlt text-3xl">
            A Propos
          </Link>
          <Link to="" className="font-fontAlt text-3xl">
            Projets
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
