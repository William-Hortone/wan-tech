import React from "react";
import { ServiceItem, Title } from "../../components";

const ProjectView = () => {
  return (
    <>
      <section className="w-full h-screen bg-orange-600 p-8">
        <Title title="Sevices" />

        <ServiceItem />
      </section>
    </>
  );
};

export default ProjectView;
