import { motion } from "framer-motion";
import { logoData } from "../constants/data";
import images from "../constants/images";
import {
    SiAccenture,
    SiAdobe,
    SiCoinbase,
    SiFacebook,
    SiPatreon,
    SiReddit,
    SiYoutube,
} from "react-icons/si";
import React, { useEffect, useState } from "react";

const LogoHero = () => {
    return (
        <section className="pb-12 bg-white min-h-[100svh] flex flex-col justify-center">
            <div className="flex flex-col items-center w-full px-8 py-12 md:py-20">
                <h1 className="max-w-xl text-4xl font-semibold text-center md:text-6xl">
                    Un logo à votre image, fidèle à votre vision.
                </h1>
                <p className="max-w-xl my-6 text-center">
                    Donnez vie à votre identité visuelle avec sens et impact.
                </p>
            </div>

            <CircleLogo />
            {/* 
            <div className="flex overflow-hidden">
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
            </div>
            <div className="flex mt-4 overflow-hidden">
                <TranslateWrapper reverse>
                    <LogoItemsBottom />
                </TranslateWrapper>
                <TranslateWrapper reverse>
                    <LogoItemsBottom />
                </TranslateWrapper>
                <TranslateWrapper reverse>
                    <LogoItemsBottom />
                </TranslateWrapper>
            </div> */}
        </section>
    );
};

const TranslateWrapper = ({ children, reverse }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {children}
        </motion.div>
    );
};

const LogoItem = ({ logo }) => {
    return (
        <div
            className="flex items-center justify-center w-16 h-16 text-black transition-colors md:w-24 md:h-24"
        >
            <img src={logo} className="object-cover w-full h-full" alt="logo" />
        </div>
    );
};

const LogoItemsTop = () => (
    <>
        {logoData.map((logo, index) => (
            <LogoItem key={index} logo={logo.logo} />
        ))}
    </>
);

const LogoItemsBottom = () => (
    <>
        {logoData.map((logo, index) => (
            <LogoItem key={index} logo={logo.logo} />
        ))}

    </>
);




// import { motion } from "framer-motion";

const CircleLogo = () => {
    return (
        <div className="grid px-4 py-12 overflow-hidden bg-white place-content-center">
            <SpinningLogos />
        </div>
    );
};

const SpinningLogos = () => {
    const { width } = useWindowSize();

    const [sizes, setSizes] = useState({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        logoFontSize: LOGO_FONT_SIZE.lg,
    });

    useEffect(() => {
        if (!width) return;

        if (width < BREAKPOINTS.sm) {
            setSizes({
                radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
                iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
                ringPadding: RING_PADDING.sm,
                logoFontSize: LOGO_FONT_SIZE.sm,
            });
        } else if (width < BREAKPOINTS.md) {
            setSizes({
                radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
                iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
                ringPadding: RING_PADDING.md,
                logoFontSize: LOGO_FONT_SIZE.md,
            });
        } else {
            setSizes({
                radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
                iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
                ringPadding: RING_PADDING.lg,
                logoFontSize: LOGO_FONT_SIZE.lg,
            });
        }
    }, [width]);

    return (
        <div
            style={{
                width:
                    sizes.radiusToCenterOfIcons +
                    sizes.iconWrapperWidth +
                    sizes.ringPadding,
                height:
                    sizes.radiusToCenterOfIcons +
                    sizes.iconWrapperWidth +
                    sizes.ringPadding,
            }}
            className="grid rounded-full shadow-inner place-content-center bg-neutral-100"
        >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={TRANSITION}
                style={{
                    width:
                        sizes.radiusToCenterOfIcons -
                        sizes.iconWrapperWidth -
                        sizes.ringPadding,
                    height:
                        sizes.radiusToCenterOfIcons -
                        sizes.iconWrapperWidth -
                        sizes.ringPadding,
                }}
                className="relative grid bg-white rounded-full shadow place-items-center"
            >
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={TRANSITION}
                    className="text-lg font-bold uppercase text-neutral-900 sm:text-xl md:text-3xl"
                >
                    VOTRE LOGO
                </motion.div>
                {logoData.map((item, idx) => {
                    const degrees = (360 / logoData.length) * idx;
                    return (
                        <motion.div
                            key={idx}
                            style={{
                                marginTop:
                                    sizes.radiusToCenterOfIcons *
                                    Math.sin(degreesToRadians(degrees)),
                                marginLeft:
                                    sizes.radiusToCenterOfIcons *
                                    Math.cos(degreesToRadians(degrees)),
                                width: sizes.iconWrapperWidth,
                                height: sizes.iconWrapperWidth,
                            }}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={TRANSITION}
                            className={`absolute  place-content-center rounded-full shadow-lg `}
                        >
                            {/* <icon.logo
                                style={{
                                    fontSize: sizes.logoFontSize,
                                }}
                            /> */}

                            <img src={item.logo} alt="logo" className="rounded-full" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

// export default Example;

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};

// const w = [
//     {
//         Icon: SiFacebook,
//         className: "bg-[#0766FF] text-white",
//     },
//     {
//         Icon: SiYoutube,
//         className: "bg-[#FF0200] text-white",
//     },
//     {
//         Icon: SiAccenture,
//         className: "bg-[#A101FF] text-white",
//     },
//     {
//         Icon: SiAdobe,
//         className: "bg-[#CE0E03] text-white",
//     },
//     {
//         Icon: SiReddit,
//         className: "bg-[#FF4500] text-white",
//     },
//     {
//         Icon: SiCoinbase,
//         className: "bg-[#0052FF] text-white",
//     },
//     {
//         Icon: SiPatreon,
//         className: "bg-[#F96C59] text-white",
//     },
// ];

// Defines the distance from the center of the circle to the center
// of the icons
const RADIUS_TO_CENTER_OF_ICONS = {
    sm: 200,
    md: 325,
    lg: 425,
};
// Defines the width of the icon circles
const ICON_WRAPPER_WIDTH = {
    sm: 40,
    md: 65,
    lg: 80,
};
// Defines the padding between the icon circles and the inner and outer rings
const RING_PADDING = {
    sm: 4,
    md: 8,
    lg: 12,
};
// Defines the font size for logos
const LOGO_FONT_SIZE = {
    sm: 18,
    md: 24,
    lg: 36,
};

const BREAKPOINTS = {
    sm: 480,
    md: 768,
};

const TRANSITION = {
    repeat: Infinity,
    repeatType: "loop",
    duration: 50,
    ease: "linear",
};

export default LogoHero;