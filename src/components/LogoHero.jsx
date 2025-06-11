import { motion } from "framer-motion";
import { logoData } from "../constants/data";
import images from "../constants/images";

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
            </div>
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

export default LogoHero;