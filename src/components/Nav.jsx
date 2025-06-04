import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import images from "../constants/images";

// export const Example = () => {
//   return (
//     <div className="h-screen bg-neutral-100">
//       <Nav />
//       <span className="absolute flex items-center gap-2 text-lg -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-violet-500">
//         <span>Open me</span> <FiArrowUpRight />
//       </span>
//     </div>
//   );
// };

export const Nav = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between w-full h-auto px-8 ">
                <div className="w-[7%] h-auto">
                    <img src={images.logo} alt="website logo" className="object-cover size-full " />
                </div>
                <div className="hidden gap-4 md:flex ">
                    {SOCIAL_CTAS.map((l, idx) => {
                        return (
                            <motion.a
                                key={idx}
                                href={l.href}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 1 + idx * 0.125,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                }}
                                exit={{ opacity: 0, y: -8 }}
                            >
                                <l.Component className="text-xl text-white transition-colors hover:text-basic" />
                            </motion.a>
                        );
                    })}
                </div>
                <HamburgerButton active={active} setActive={setActive} />
            </div>
            <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
        </>
    );
};

const LinksOverlay = () => {
    return (
        <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
            <Logo />
            <LinksContainer />
            <FooterCTAs />
        </nav>
    );
};

const LinksContainer = () => {
    return (
        <motion.div className="p-12 pl-4 space-y-4 md:pl-20">
            {LINKS.map((l, idx) => {
                return (
                    <NavLink key={l.title} href={l.href} idx={idx}>
                        {l.title}
                    </NavLink>
                );
            })}
        </motion.div>
    );
};

const NavLink = ({ children, href, idx }) => {
    return (
        <motion.a
            initial={{ opacity: 0, y: -8 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.75 + idx * 0.125,
                    duration: 0.5,
                    ease: "easeInOut",
                },
            }}
            exit={{ opacity: 0, y: -8 }}
            href={href}
            className="block text-5xl font-semibold transition-colors text-violet-400 hover:text-violet-50 md:text-7xl"
        >
            {children}.
        </motion.a>
    );
};

const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
        <motion.a
            initial={{ opacity: 0, y: -12 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
            }}
            exit={{ opacity: 0, y: -12 }}
            href="#"
            className="grid w-20 h-20 transition-colors bg-transparent place-content-center rounded-br-xl rounded-tl-xl hover:bg-violet-50"
        >
            <div className="w-[6vw] h-auto">
                <img src={images.logo} alt="website logo" className="object-cover size-full " />
            </div>
        </motion.a>
    );
};

const HamburgerButton = ({ active, setActive }) => {
    return (
        <>
            <motion.div
                initial={false}
                animate={active ? "open" : "closed"}
                variants={UNDERLAY_VARIANTS}
                style={{ top: 16, right: 16 }}
                className="fixed z-10 shadow-lg rounded-xl bg-gradient-to-br bg-violet-500 from-violet-600 to-violet-500 shadow-violet-800/20"
            />

            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((pv) => !pv)}
                className={`group relative  z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
                    }`}
            >
                <motion.span
                    variants={HAMBURGER_VARIANTS.top}
                    className="absolute block w-10 h-1 bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%" }}
                />
                <motion.span
                    variants={HAMBURGER_VARIANTS.middle}
                    className="absolute block w-10 h-1 bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={HAMBURGER_VARIANTS.bottom}
                    className="absolute block w-5 h-1 bg-white"
                    style={{ x: "-50%", y: "50%" }}
                />
            </motion.button>
        </>
    );
};

const FooterCTAs = () => {
    return (
        <>
            <div className="absolute flex gap-4 bottom-6 left-6 md:flex-col">
                {SOCIAL_CTAS.map((l, idx) => {
                    return (
                        <motion.a
                            key={idx}
                            href={l.href}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1 + idx * 0.125,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            exit={{ opacity: 0, y: -8 }}
                        >
                            <l.Component className="text-xl text-white transition-colors hover:text-violet-300" />
                        </motion.a>
                    );
                })}
            </div>

            <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 1.125,
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute flex items-center gap-2 px-3 py-3 text-4xl uppercase transition-colors rounded-full bottom-2 right-2 bg-violet-700 text-violet-200 hover:bg-white hover:text-violet-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
            >
                <span className="hidden md:block">contact us</span> <FiArrowRight />
            </motion.button>
        </>
    );
};

const LINKS = [
    {
        title: "home",
        href: "#",
    },
    {
        title: "features",
        href: "#",
    },
    {
        title: "blog",
        href: "#",
    },
    {
        title: "careers",
        href: "#",
    },
];

const SOCIAL_CTAS = [
    {
        Component: SiTwitter,
        href: "#",
    },
    {
        Component: SiInstagram,
        href: "#",
    },
    {
        Component: SiLinkedin,
        href: "#",
    },
    {
        Component: SiYoutube,
        href: "#",
    },
];

const UNDERLAY_VARIANTS = {
    open: {
        width: "calc(100% )",
        height: "calc(100vh)",
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
    },
    closed: {
        width: "80px",
        height: "80px",
        transition: {
            delay: 0.75,
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        },
    },
};

const HAMBURGER_VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};