import { Footer, HeroWrapper, LogoHero, OverviewServices } from "../components";
import { Description, ProjectView } from "../containers";

const Home = () => {
  return (
    <>
      <section className="z-10 h-auto bg-black pageContainer">
        <section className="bg-black pageWrapper">
          <HeroWrapper />
          <Description />
          <OverviewServices />
          <ProjectView />
          <LogoHero />
        </section>
        <span className="transitElement" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
