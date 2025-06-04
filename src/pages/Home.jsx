import React from "react";
import { Header, Description, ServicesView, ProjectView } from "../containers";
import { Footer, Hero, HeroWrapper, LogoHero } from "../components";

const Home = ({ showMenu, handleMenuToggle }) => {
  return (
    <>
      <section className="h-auto bg-black pageContainer">
        <section className="bg-black pageWrapper">
          {/* <Header handleMenuToggle={handleMenuToggle} showMenu={showMenu} /> */}
          <HeroWrapper />
          {/* <Hero /> */}
          <Description />
          <ServicesView />
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
