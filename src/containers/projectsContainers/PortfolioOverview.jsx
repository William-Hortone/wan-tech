import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import images from './../../constants/images';

const PortfolioOverview = () => {
    return (
        <section className="flex justify-center p-8 bg-white">
            <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                <Card
                    title="Gericht"
                    description="We make pretty buildings"
                    imgSrc={images.project5}
                    link="https://gericht-a.netlify.app"
                />
                <Card
                    title="RapidPay"
                    description="This one's pretty nice"
                    imgSrc={images.project1}
                    link=""
                />
                <Card
                    title="General TTK"
                    description="You like wavy buildings?"
                    imgSrc={images.project6}
                    link="https://curious-melba-81e493.netlify.app/"
                />
                <Card
                    title="Fournisseur de proximité"
                    description="We can even do TALL buildings"
                    imgSrc={images.project4}
                    link="https://fdp-app-client.vercel.app"
                />

                <Card
                    title="Ona Batiment"
                    description="This one's real blocky"
                    imgSrc="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                    link="https://onabatiment.com"
                />
            </div>
        </section>

    );
};

const Card = ({ imgSrc, title, description, link }) => {
    return (
        <motion.div whileHover="hover" className="w-full h-[300px] relative">
            <div className="flex flex-col justify-center p-6 bg-black h-1/2">
                <h3 className="mb-2 text-xl font-semibold text-white uppercase">{title}</h3>
                {/* <p className="text-sm font-light text-slate-300">{description}</p> */}
            </div>
            <motion.div
                initial={{
                    top: "0%",
                    right: "0%",
                }}
                variants={{
                    hover: {
                        top: "50%",
                        right: "50%",
                    },
                }}
                className="absolute inset-0 z-10 bg-slate-200"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <a
                href={link}
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