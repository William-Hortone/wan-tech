import React from "react";
import { Header, Description, ServicesView, ProjectView } from "../containers";
import { Footer } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <Description />
      <ServicesView />
      <ProjectView />
      <Footer />
      {/* <div className="h-screen w-full bg-black">
        <h2 className="text-4xl text-center text-white">hello william </h2>
      </div> */}
    </>
  );
};

export default Home;
