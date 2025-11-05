import { Footer, HeroWrapper, LogoHero, OverviewServices } from "../components";
import Navbar from "../components/Navbar";
import { Description, ProjectView } from "../containers";

const Home = () => {
  return (
    <>
      <Navbar
        position="right"
        textColor="white"
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fffff"

        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        accentColor="#ff6b6b"

      />
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
