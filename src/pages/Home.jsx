import React from "react";
import { Header, Description, ServicesView, ProjectView } from "../containers";
import { Footer, PageTransition } from "../components";

const Home = ({ setShowMenu, showMenu }) => {
  return (
    <>
    {/* <PageTransition> */}

      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      <Description />
      <ServicesView />
      <ProjectView />
      <Footer />
    {/* </PageTransition> */}
    </>
  );
};

export default Home;
