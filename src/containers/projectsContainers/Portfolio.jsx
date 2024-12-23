import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { CardImg, PageTitle } from "../../components";
import images from "../../constants/images";
// import { Infos, NavBar, NavBtn, PageTitle } from "../../components";

const Portfolio = () => {
  const wrapperEl = useRef();

  const { scrollYProgress } = useScroll({
    target: wrapperEl,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
  return (
    <>
      <section ref={wrapperEl} className="h-[300vh] relative pb-20 bg-basic">
        {/* <div className="flex flex-col items-center justify-center w-full gap-16 mt-28">
          <PageTitle title="Portfolio" />
        </div> */}
        <div className="sticky top-0 flex flex-col items-center h-screen overflow-hidden bg-green-600">
          <div className="flex flex-col items-center justify-center w-full gap-16 my-8">
            <PageTitle title="Portfolio" />
          </div>
          <motion.div style={{ x }} className="flex gap-4 bg-orange-400">
            <CardImg title="AESGC" img={images.img1} />
            <CardImg title="AESGC" img={images.img1} />
            <CardImg title="AESGC" img={images.img1} />
            {/* <CardImg title='AESGC' img={images.img1}/>
        <CardImg title='AESGC' img={images.img1}/>
        <CardImg title='AESGC' img={images.img1}/> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
