import { Footer, HeroWrapper, LogoHero, OverviewServices } from "../components";
import Navbar from "../components/Navbar";
import { Description, ProjectView } from "../containers";

const Home = () => {
  return (
    <>

      <section className="relative z-10 h-auto overflow-x-hidden bg-black pageContainer">
        <section className="bg-black pageWrapper">
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
          <HeroWrapper />
          <Description />
          <OverviewServices />
          {/* <ServicesPresentations /> */}
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
