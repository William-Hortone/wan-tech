import { projectData } from "../../constants/data";
import { Carousel } from "../ui/Carousel";

export default function CarouselProjects() {

  return (
    <div className="relative w-full h-full py-20 overflow-hidden">
      <Carousel slides={projectData} />
    </div>
  );
}
