import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";
import images from "../constants/images";

import video from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const OverviewServices = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return (
        <>
            <section ref={targetRef} className="flex text-white bg-black">
                <Content content={items} />
                <Images content={items} scrollYProgress={scrollYProgress} />
            </section>
        </>
    );
};

const Content = ({ content }) => {
    return (
        <div className="w-full">
            {content.map(({ id, title, description }, idx) => (
                <div
                    key={id}
                    className={`p-8 h-screen flex flex-col justify-between ${idx % 2 ? "bg-white text-black" : "bg-black text-white"
                        }`}
                >
                    <h3 className="text-3xl font-medium">{title}</h3>
                    <p className="w-full max-w-md font-light">{description}</p>
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
        <div className="sticky top-0 w-24 h-screen overflow-hidden md:w-full">
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

const items = [
    {
        id: 1,
        title: "SITES WEB",
        description: "Nous concevons des sites web sur mesure qui reflètent l'identité de votre marque et répondent à vos objectifs commerciaux. Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce ou d'un blog,",
        img: images.webSite
    },
    {
        id: 2,
        title: "APPLICATIONS MOBILE",
        description: "Nous concevons des applications mobiles innovantes, parfaitement adaptées aux besoins uniques de votre entreprise et de vos utilisateurs. Nous créons des applications intuitives, performantes et visuellement attrayantes, qu'elles soient destinées à iOS, Android ou aux deux",
        img: images.mobileApp,
    },
    {
        id: 3,
        title: "LOGO ET AFFICHES",
        description: "Votre image de marque commence par un logo percutant et des affiches attrayantes. Nous travaillons en étroite collaboration avec vous pour comprendre vos valeurs et votre vision, afin de créer des éléments graphiques qui captivent votre audience.",
        img: images.logoIntro,
    },
    {
        id: 4,
        title: "Video Marketing",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        video: video
    },
];
