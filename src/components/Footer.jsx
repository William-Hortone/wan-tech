import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaRegEnvelope, FaTiktok } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const parallaxRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const parallax = parallaxRef.current;
    const content = contentRef.current;

    if (!footer || !parallax || !content) return;

    // Parallax effect for background
    gsap.to(parallax, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Fade in animation for content
    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate individual sections
    const sections = footer.querySelectorAll(".footer-section");
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full overflow-hidden bg-[#F5F5F5]"
    >
      {/* Parallax Background Pattern */}

      {/* Subtle corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-purple-600/5 blur-3xl" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 px-4 pt-20 pb-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 pb-16 mb-12 border-b border-gray-300 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="footer-section lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={images.logo}
                alt="WanTech Logo"
                className="object-contain w-auto h-16 transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="max-w-md mb-8 text-base leading-relaxed text-gray-700">
              Il n'y a qu'un pas à franchir entre votre idée et sa réalisation.
              Nous donnons vie à vos projets grâce à des solutions digitales sur mesure.
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Suivez-nous
              </h3>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100066250815544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg w-11 h-11 hover:bg-gray-200 hover:text-gray-900 hover:-translate-y-1 group"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://youtu.be/a9ijKu06ILY?si=9a8uhOTSTGB3K4Iv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg w-11 h-11 hover:bg-gray-200 hover:text-gray-900 hover:-translate-y-1 group"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Liens Rapides
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À Propos', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projets', href: '/projects' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative inline-flex items-center text-base text-gray-700 transition-all duration-300 group hover:text-gray-900 hover:translate-x-1"
                  >
                    <span className="w-0 h-px mr-0 transition-all duration-300 bg-gray-900 group-hover:w-4 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-gray-700 transition-all duration-300 group hover:text-gray-900">
                <div className="flex items-center justify-center w-8 h-8 mt-0.5 transition-all duration-300 bg-green-100 rounded-lg group-hover:bg-green-200 border border-green-200">
                  <FaWhatsapp className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase">WhatsApp</p>
                  <p className="text-sm font-medium text-gray-900">+241 04967151</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700 transition-all duration-300 group hover:text-gray-900">
                <div className="flex items-center justify-center w-8 h-8 mt-0.5 transition-all duration-300 bg-green-100 rounded-lg group-hover:bg-green-200 border border-green-200">
                  <IoLogoWechat className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase">WeChat</p>
                  <p className="text-sm font-medium text-gray-900">15852305650</p>
                </div>
              </li>
              <li>
                <a
                  href="mailto:williamhortone@gmail.com"
                  className="flex items-start gap-3 text-gray-700 transition-all duration-300 group hover:text-gray-900"
                >
                  <div className="flex items-center justify-center w-8 h-8 mt-0.5 transition-all duration-300 bg-blue-100 rounded-lg group-hover:bg-blue-200 border border-blue-200">
                    <FaRegEnvelope className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase">Email</p>
                    <p className="text-sm font-medium text-gray-900 break-all">williamhortone@gmail.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center gap-3 text-center">
          <p className="text-sm text-gray-600">
            © Copyright 2025, All Rights Reserved by
            <span className="pl-2 font-bold text-basic">WanTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
