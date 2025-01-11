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
    <div className="page-wrapper">
      {/* Page Transition Effect */}
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-black page-transition"></div>

      {/* Content */}
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageTransition;
