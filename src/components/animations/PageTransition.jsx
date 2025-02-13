import { useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // GSAP Timeline for page transition
    const tl = gsap.timeline();
    tl.to(".page-transition", {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    })
      .to(".page-transition", {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power4.in",
      });
  }, [location]);

  return (
    <div className="pageContainer">
    
      <div className="pageWrapper">
      {children}
      
      </div>
    </div>
  );
};

export default PageTransition;
