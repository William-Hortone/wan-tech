import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { CardImg } from "../../components";
import images from "../../constants/images";
const Portfolio = () => {
  const child = { width: `40em`, height: `100%` };

  return (
    <>
      <section className="portfolio-container w-full h-[70vh]">
        <section className="portfolio-container w-[82%] h-[70vh]">
          <HorizontalScroll>
            <div
              style={child}
              className="flex items-center justify-start w-full "
            >
              <div className="w-[100%] h-full bg-slate-500 flex items-center justify-start">
                <CardImg
                  link="https://gericht-a.netlify.app"
                  title="project1"
                  img={images.img3}
                />
              </div>
            </div>
            <div
              style={child}
              className="flex items-center justify-start w-full h-full"
            >
              <div className="w-[100%] h-full bg-slate-500 flex items-center justify-start">
                <CardImg
                  link="https://fdp-app-client.vercel.app"
                  title="project4"
                  img={images.img5}
                />
              </div>
            </div>
            <div
              style={child}
              className="flex items-center justify-start w-full h-full"
            >
              <div className="w-[100%] h-full bg-slate-500 flex items-center justify-start">
                <CardImg
                  link="https://onabatiment.com"
                  title="project2"
                  img={images.img4}
                />
              </div>
            </div>
            <div
              style={child}
              className="flex items-center justify-start w-full h-full"
            >
              <div className="w-[100%] h-full bg-slate-500 flex items-center justify-start">
                <CardImg link="" title="project3" img={images.project1} />
              </div>
            </div>
          </HorizontalScroll>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
