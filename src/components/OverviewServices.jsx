import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import images from "../constants/images";
import video from "../assets/video1.mp4";

const OverviewServices = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    return (
        <section
            id="services"
            ref={targetRef}
            className="flex flex-col text-white bg-black lg:flex-row"
        >
            <Content content={items} />
            <Images content={items} scrollYProgress={scrollYProgress} />
        </section>
    );
};

const Content = ({ content }) => {
    return (
        <div className="w-full lg:w-1/2">
            {content.map(({ id, title, description }, idx) => (
                <div
                    key={id}
                    className={`p-6 sm:p-8 h-[100vh] flex flex-col justify-between ${idx % 2 ? "bg-white text-black" : "bg-black text-white"
                        }`}
                >
                    <h3 className="text-2xl font-bold uppercase sm:text-3xl">{title}</h3>
                    <p className="max-w-xl text-sm font-light sm:text-base">{description}</p>
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
        <div className="sticky top-0 w-full h-screen overflow-hidden lg:w-1/2">
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
        description: "Nous donnons vie à votre message grâce à des vidéos captivantes et stratégiquement pensées. Qu’il s’agisse de présentations de produits, de contenus pour les réseaux sociaux ou de publicités percutantes, nous créons des vidéos qui retiennent l’attention, engagent votre audience et renforcent votre image de marque",
        video: video
    },
];
