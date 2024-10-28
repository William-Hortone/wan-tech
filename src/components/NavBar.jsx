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
            ? "h-screen w-1/4 flex flex-col -right-full absolute top-0 p-4 "
            : "slide-in-right h-screen w-1/4 flex flex-col fixed top-0 p-4 bg-black z-10"
        }
      >
        {/* Title logo */}
        <h2 className="absolute right-8 top-1/4 flex flex-col items-center text-4xl font-fontBase text-basic">
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

        <ul className=" h-screen flex flex-col justify-center gap-12 p- relative  ">
          <Link
            to=""
            className="font-fontAlt  uppercase text-3xl text-zinc-400  hover:text-white hover:font-bold transition  ease-in-out duration-300 "
          >
            Accueil
          </Link>
          <Link
            to=""
            className="font-fontAlt  uppercase text-3xl text-zinc-400 hover:text-white hover:font-bold transition  ease-in-out duration-300"
          >
            A Propos
          </Link>
          <Link
            to=""
            className="font-fontAlt  uppercase text-3xl text-zinc-400 hover:text-white hover:font-bold transition  ease-in-out duration-300"
          >
            Projets
          </Link>
        </ul>

        <p className="font-fontAlt text-lg text-white">wantech@gmail.com</p>
      </nav>
      {showMenu && (
        <div class="w-full h-screen fixed top-0 left-0 bg-[rgba(255,255,255,0)] transition-all ease duration-400 backdrop-blur-md z-2"></div>
      )}
    </>
  );
};

export default NavBar;
