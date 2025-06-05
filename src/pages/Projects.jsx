import { useEffect, useState } from "react";
import {
  Footer,
  Infos,
  Nav,
  NavBar,
  PageTitle
} from "../components";
import { PortfolioOverview } from "../containers";

const Projects = ({ showMenu, handleMenuToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="h-auto min-h-[100vh] overflow-x-hidden pb-4 bg-black pageContainer">
        {isVisible && (
          <section className="pageWrapper">
            <section className="pb-20 bg-slate-300">
              <Nav />
              <Infos />
              <NavBar showMenu={showMenu} handleMenuToggle={handleMenuToggle} />

              <div className="flex flex-col items-center justify-center w-full gap-4 my-[10rem]">
                <PageTitle title="Portfolio" />
              </div>

              {/* Portfolio  content */}
              <PortfolioOverview />
            </section>
          </section>
        )}
        <span className="transitElement" />
      </section>
      {isVisible && <Footer />}
    </>
  );
};

export default Projects;
