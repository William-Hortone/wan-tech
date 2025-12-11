import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { servicesItems } from '../constants/data.js'

const OverviewServices = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    return (
        <section
            id="services"
            ref={targetRef}
            className="flex flex-col text-white bg-black lg:flex-row overflow-x-hidden max-w-full w-full"
        >
            <Content content={servicesItems} />
            <Images content={servicesItems} scrollYProgress={scrollYProgress} />
        </section>
    );
};

const Content = ({ content }) => {
    return (
        <div className="w-full max-w-full lg:w-1/2 overflow-x-hidden">
            {content.map(({ id, title, description }, idx) => (
                <div
                    key={id}
                    className={`p-6 sm:p-8 h-[100vh] flex flex-col justify-between ${idx % 2 ? "bg-white text-black" : "bg-black text-white"
                        }`}
                >
                    <h3 className="text-2xl font-bold uppercase sm:text-3xl md:text-5xl">{title}</h3>
                    <p className="max-w-xl text-lg font-light md:lg:text-3xl sm:text-base">{description}</p>
                </div>
            ))}
        </div>
    );
};

const Images = ({ content, scrollYProgress }) => {
    const top = useTransform(
        scrollYProgress,
        [0, 1],
        [`-${(content.length - 1) * 100}vh`, "0vh"]
    );

    return (
        <div className="sticky top-0 w-full max-w-full h-screen overflow-hidden lg:w-1/2">
            <motion.div style={{ top }} className="absolute left-0 right-0">
                {[...content].reverse().map(({ img, video, id, title }) => (
                    <div key={id} className="w-full h-screen">
                        {video ? (
                            <video
                                className="object-cover w-full h-full"
                                src={video}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <img
                                className="object-cover w-full h-full"
                                src={img}
                                alt={title}
                            />
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default OverviewServices;


