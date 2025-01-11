import React from "react";
import { Header, Description, ServicesView, ProjectView } from "../containers";
import { Footer, PageTransition } from "../components";

const Home = ({ setShowMenu, showMenu }) => {
  return (
    <>
      {/* <PageTransition> */}
      <section className="h-auto pb-20 overflow-x-hidden bg-white pageContainer">
        <section className="bg- pageWrapper">
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
