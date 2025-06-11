import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { allProjects } from "../../constants/data";

const PortfolioOverview = () => {
    return (
        <section className="flex justify-center p-8 bg-white">
            <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                {allProjects.map((project, idx) => (
                    <Card
                        key={idx}
                        project={project}
                    />
                ))}
            </div>
        </section>

    );
};

const Card = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleTap = () => {
        setIsHovered(prev => !prev);
    };

    return (
        <motion.div
            whileHover="hover"
            onClick={handleTap}
            className="w-full h-[300px] relative cursor-pointer md:cursor-default"
        >
            <div className="flex flex-col justify-center p-6 bg-black h-1/2">
                <h3 className="mb-2 text-xl font-semibold text-white uppercase">{project.title}</h3>
            </div>

            <motion.div
                initial={{ top: "0%", right: "0%" }}
                animate={isHovered ? { top: "50%", right: "50%" } : { top: "0%", right: "0%" }}
                variants={{
                    hover: { top: "50%", right: "50%" },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 z-10 bg-slate-200"
                style={{
                    backgroundImage: `url(${project.imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <a
                href={project.link}
                target="blank"
                rel="nofollow"
                className="absolute bottom-0 right-0 z-0 grid w-1/2 text-black transition-colors bg-white h-1/2 place-content-center hover:text-indigo-500"
            >
                <div className="flex items-center cursor-pointer">
                    <span className="text-xs uppercase">Visiter</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </a>
        </motion.div>
    );
};

export default PortfolioOverview;