import { useEffect, useState } from "react";
import { Footer, Infos, Nav } from "../components";
import { Introduction } from "../containers";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="h-auto min-h-[100vh] z-10 overflow-x-hidden bg-black pageContainer">
        <section className="pageWrapper">
          <section className="bg-slate-300">
            <Nav />
            <Infos />
            {isVisible && (
              <Introduction />
            )}
          </section>
        </section>
        <span className="transitElement" />
      </section>

      {isVisible && <Footer />}
    </>
  );
};

export default About;
