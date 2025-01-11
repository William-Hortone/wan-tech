import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { CardImg, PageTitle } from "../../components";
import images from "../../constants/images";

const Portfolio = () => {
  const wrapperEl = useRef();

  // Track scroll position of the window, no specific target needed for global scroll tracking
  const { scrollYProgress } = useScroll({
    target: wrapperEl, // Tracking the scroll position of the section
  });

  // Transform the scrollYProgress into a horizontal translation range
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);

  return (
    <section ref={wrapperEl} className="relative h-[300vh] w-full ">
      {/* The sticky div will stay at the top of the viewport */}
      <div className="sticky top-0 flex flex-col items-center h-screen overflow-hidden ">
        <div className="flex flex-col items-center justify-center w-full gap-16 my-8">
          <PageTitle title="Portfolio" />
        </div>

        {/* Horizontal scrolling area */}
        <motion.div
          style={{ x }}
          className="flex gap-4 w-max" // w-max ensures the container width matches its content
        >
          <CardImg link='https://gericht-a.netlify.app' title="project1" img={images.img3} />
          <CardImg link='https://fdp-app-client.vercel.app' title="project4" img={images.img5} />
          <CardImg link='https://onabatiment.com' title="project2" img={images.img4} />
          <CardImg link='' title="project3" img={images.project1} />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
