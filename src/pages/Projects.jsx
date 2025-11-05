import { useEffect, useState } from "react";
import {
  Footer,
  Infos,
  PageTitle
} from "../components";
import Navbar from "../components/Navbar";
import { PortfolioOverview } from "../containers";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="h-auto min-h-[100vh] overflow-x-hidden  bg-black pageContainer">
        {isVisible && (
          <section className="pageWrapper">
            <section className="pb-20 bg-slate-300">
              {/* <Nav /> */}

              <Navbar
                position="right"
                textColor="white"
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#000000"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                accentColor="#ff6b6b"

              />              <Infos />

              <div className="flex flex-col items-center justify-center w-full gap-4 my-[3rem] md:my-[10rem]">
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
