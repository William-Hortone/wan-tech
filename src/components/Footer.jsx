import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaRegEnvelope, FaTiktok } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  return (
    <>
      {/* Fixed Footer */}
      <footer id="contact" className="flex flex-col justify-between w-full h-screen overflow-hidden bg-black text-basic">
        <div className="relative z-0 flex flex-col justify-between h-screen px-4 py-8 md:p-16">
       
          <h3 className="z-0 w-full md:w-1/2 font-fontAlt 2xl:text-2xl">
            Il n'y a qu'un pas à franchir entre votre idée et sa réalisation.
            Nous donnons vie à vos projets grâce à des solutions digitales sur
            mesure.
          </h3>

          <div className="flex flex-col-reverse justify-between md:flex-row">
            <div className="flex flex-col pt-8 md:pt-0 md:mr-4 ">
              <h2 className="font-bold uppercase font-fontAlt">
                Contactez-nous
              </h2>

              <ul className="flex flex-col gap-2 mt-2">
                <div className="flex gap-4 font-medium ">
                  <FaWhatsapp size={20} color="#E2E2E2" />
                  <span> +241 04967151</span>
                </div>
                <div className="flex gap-4 font-medium ">
                  <IoLogoWechat size={20} color="#E2E2E2" />
                  <span>19128302455</span>
                </div>

                <a
                  target="blank"
                  href="mailto:williamhortone@gmail.com"
                  className="flex gap-4 font-medium cursor-pointer hover:text-white "
                >
                  <FaRegEnvelope size={20} color="#E2E2E2" />
                  <span className=" hover:text-white">
                    williamhortone@gmail.com
                  </span>
                </a>

              </ul>
            </div>

            <div className="flex flex-col md:mr-4 ">
              <h2 className="font-bold uppercase font-fontAlt">
                Suivez-nous
              </h2>

              <ul className="flex flex-col gap-2 mt-2">
                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100066250815544"
                  className="flex gap-4 font-medium cursor-pointer hover:text-white "
                >
                  <FaFacebookF size={20} color="#E2E2E2" />
                  <span>Wan Tech </span>
                </a>
                <a
                  target="blank"
                  href="mailto:williamhortone@gmail.com"
                  className="flex gap-4 font-medium cursor-pointer hover:text-white "
                >
                  <FaTiktok size={20} color="#E2E2E2" />
                  <span className=" hover:text-white">
                    @williamhortone
                  </span>
                </a>

              </ul>
            </div>

            <div className="h-auto w-[100px] md:w-[250px]">
              <img
                className="z-0 object-cover w-full h-full"
                src={images.logo}
                alt="logo"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="font-semibold ">WanTech@2025</p>
            <p className="font-semibold ">Designed By WanTech</p>
          </div>

          <div className="absolute flex-col items-center hidden -translate-x-1/2 md:flex bottom-8 left-1/2">
            <p className=" font-opensans">Agence de solutions digitales</p>
            <h2 className=" font-fontBase md:text-3xl lg:text-5xl">WAN TECH</h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
