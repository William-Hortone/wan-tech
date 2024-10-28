import React from "react";
import { Button } from "../../components";

const Description = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center gap-32 px-[20%] bg-zic-800">
     <div>

      <h3 className="font-fontAlt uppercase 2xl:text-3xl md:text-xl text-center leading-10">
        <span>
          Il n'y a qu'un pas à franchir entre votre idée et sa réalisation :
          contactez-nous.
        </span>
        <span>Nous donnons vie à vos projets grâce à des </span>
        <span>solutions digitales sur mesure : applications</span>
        <span>mobiles, sites web, logos et affiches</span>
      </h3>
     </div>

      <Button colorText="#FFFFFF" title="Voir Plus" />
    </section>
  );
};

export default Description;
