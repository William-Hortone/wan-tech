import React from "react";
import { Header, Description, ServicesView, ProjectView } from "../containers";
import { Footer } from "../components";

const Home = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      <Description />
      <ServicesView />
      <ProjectView />
      <Footer />
    </>
  );
};

export default Home;
