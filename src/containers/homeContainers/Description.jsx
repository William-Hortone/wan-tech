import React from "react";
import { Button } from "../../components";

const Description = () => {


  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center gap-8 px-[20%] bg-primary">
      <h3
    
        className="font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center leading-10"
      >
        Il n'y a qu'un pas à franchir entre votre idée et sa réalisation :
        contactez-nous. <br /> Nous donnons vie à vos projets grâce à des solutions
        digitales sur mesure : applications mobiles, sites web, logos et
        affiches
      </h3>

      <Button colorText="#FFFFFF" title="Voir Plus" />
    </section>
  );
};

export default Description;
