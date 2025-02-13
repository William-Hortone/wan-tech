import React from "react";
import { Header, Description, ServicesView, ProjectView } from "../containers";
import { Footer } from "../components";

const Home = ({ setShowMenu, showMenu }) => {
  return (
    <>
      {/* <PageTransition> */}
      <section className="h-auto overflow-x-hidden bg-black pageContainer">
        <section className="bg-black pageWrapper">
          <Header setShowMenu={setShowMenu} showMenu={showMenu} />
          <Description />
          <ServicesView />
          <ProjectView />
        </section>
        <span className="transitElement" />
      </section>
      <Footer />
      {/* </PageTransition> */}
    </>
  );
};

export default Home;
