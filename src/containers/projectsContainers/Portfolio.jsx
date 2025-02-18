import React, { useRef } from "react";
import { CardImg } from "../../components";
import images from "../../constants/images";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
const Projects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const projectData = [
    {
      link: "https://gericht-a.netlify.app",
      title: "Project 1",
      img: images.img3,
    },
    {
    
      link:"https://fdp-app-client.vercel.app",
      title:"project4",
      img:images.img5
    },
    {
      link:"https://onabatiment.com",
      title: "project2",
      img: images.img4,
    },

    {
      link: "",
      title: "Project 3",
      img: images.project1,

    },
  ];

  return (
    <section className="h-[100vh] w-full  flex items-center justify-center">
      <div className="flex relative gap-4 items-center bg-slate-400 justify-between py-4 w-full max-w-[100%]">
        <button
          onClick={scrollLeft}
          className="absolute p-2 text-white bg-gray-500 rounded-full left-[45%] -bottom-10 hover:bg-gray-700"
        >
          <FaCircleChevronLeft size={22} color="#FF6F61" />
        </button>

        <div
          ref={scrollRef}
          className="flex w-full gap-3 py-4 space-x-4 overflow-x-hidden"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-none bg-gray-200 rounded-lg shadow-lg"
            >
              <CardImg
                link={project.link}
                title={project.title}
                img={project.img}
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute p-2 text-white bg-gray-500 rounded-full right-[45%] -bottom-10 hover:bg-gray-700"
        >
          <FaCircleChevronRight size={22} color="#FF6F61" />
        </button>
      </div>
    </section>
  );
};

export default Projects;


 