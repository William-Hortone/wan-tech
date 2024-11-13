import React from "react";
import { SiKingstontechnology   } from "react-icons/si"; 

const Footer = () => {
  return (
    <>
      <section className="w-full h-screen relative bg-basic flex flex-col justify-between text-black  p-16">
        <h3 className="font-fontAlt 2xl:text-2xl w-1/2">
          Il n'y a qu'un pas à franchir entre votre idée et sa réalisation Nous donnons vie à vos projets grâce à des
          solutions digitales sur mesure 
        </h3>
        <div className="flex justify-between mt-8">
          <div className="mr-4">
            <h2 className="text-medium font-fontAlt  ">Contactez-nous</h2>
            <h3>wantech@gmail.com</h3>
            <h2 className="text-medium font-fontAlt mt-4 ">Liens Rapides</h2>
            <h3>Acceuil</h3>
            <h3>A propos</h3>
            <h3>Projets</h3>
          </div>

          <div>
            <SiKingstontechnology   size={300} color="#1E1E1E" />
      
          </div>
        </div>

        <div  className="flex justify-between">
          <p>WanTech@2025</p>
          <p>Copyright©2025</p>
        </div>

        <div className="flex flex-col items-center absolute bottom-8 left-1/2 -translate-x-1/2">
          <p className="font-opensans">Agence de solutions digitales</p>
          <h2 className="font-fontBase 2xl:text-5xl">WAN TECH</h2>
        </div>
      </section>
    </>
  );
};

export default Footer;
