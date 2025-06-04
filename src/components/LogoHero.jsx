import { motion } from "framer-motion";
import {
    SiNike,
    Si3M,
    SiAbstract,
    SiAdobe,
    SiAirtable,
    SiAmazon,
    SiBox,
    SiBytedance,
    SiChase,
    SiCloudbees,
    SiBurton,
    SiBmw,
    SiHeroku,
    SiBuildkite,
    SiCouchbase,
    SiDailymotion,
    SiDeliveroo,
    SiEpicgames,
    SiGenius,
    SiGodaddy,
} from "react-icons/si";

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
                <button className="bg-indigo-600 text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                    Try it free
                </button>
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

const LogoItem = ({ Icon }) => {
    return (
        <a
            href="/"
            rel="nofollow"
            target="_blank"
            className="flex items-center justify-center w-16 h-16 text-black transition-colors md:w-24 md:h-24 hover:bg-slate-200"
        >
            <Icon className="text-4xl md:text-5xl" />
        </a>
    );
};

const LogoItemsTop = () => (
    <>
        <LogoItem Icon={SiNike} />
        <LogoItem Icon={Si3M} />
        <LogoItem Icon={SiAbstract} />
        <LogoItem Icon={SiAdobe} />
        <LogoItem Icon={SiAirtable} />
        <LogoItem Icon={SiAmazon} />
        <LogoItem Icon={SiBox} />
        <LogoItem Icon={SiBytedance} />
        <LogoItem Icon={SiChase} />
        <LogoItem Icon={SiCloudbees} />
    </>
);

const LogoItemsBottom = () => (
    <>
        <LogoItem Icon={SiBmw} />
        <LogoItem Icon={SiBurton} />
        <LogoItem Icon={SiBuildkite} />
        <LogoItem Icon={SiCouchbase} />
        <LogoItem Icon={SiDailymotion} />
        <LogoItem Icon={SiDeliveroo} />
        <LogoItem Icon={SiEpicgames} />
        <LogoItem Icon={SiGenius} />
        <LogoItem Icon={SiGodaddy} />
        <LogoItem Icon={SiHeroku} />
    </>
);

export default LogoHero;