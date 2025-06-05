import { useRef } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { CardImg } from "../../components";
import images from "../../constants/images";
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
      link: "https://fdp-app-client.vercel.app",
      title: "project4",
      img: images.img5,
    },
    {
      link: "https://onabatiment.com",
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
    <section className="md:h-[100vh] h-[100vh] pb-16 md:pb-0 w-full   flex items-center justify-center">
      <div className="flex relative gap-4 items-center bg-slate-400 justify-between py-4 w-full max-w-[100%]">
        {/* Buttons for slide */}
        <button
          onClick={scrollLeft}
          className="absolute p-2 text-white bg-gray-500 rounded-full md:left-[45%] left-[30vw] -bottom-12 hover:bg-gray-700"
        >
          <FaCircleChevronLeft size={22} color="#FF6F61" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute p-2 text-white bg-gray-500 rounded-full md:right-[45%] right-[30vw] -bottom-12 hover:bg-gray-700"
        >
          <FaCircleChevronRight size={22} color="#FF6F61" />
        </button>

        <div
          ref={scrollRef}
          className="flex w-full gap-3 py-4 space-x-4 overflow-x-hidden"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex items-center ml-[5vw] md:ml-0 justify-center flex-none bg-gray-200 rounded-lg shadow-lg"
            >
              <CardImg
                link={project.link}
                title={project.title}
                img={project.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
