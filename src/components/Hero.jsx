import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="h-full rounded-xl bg-neutral-50 text-neutral-950"
    >
      <div className="sticky top-0 flex flex-col justify-between h-full md:h-[40vh] overflow-hidden">
      <span></span>
        <CenterCopy />
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
        >
          Agence de solutions digitales
        </motion.p>
        <ScrollArrow />
      </div>
    </section>
  );
};


const CenterCopy = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <img
        src="https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder "
        className="object-cover w-20 h-full mr-2 bg-neutral-200"
      />
      <h2 className="text-xl font-bold text-neutral-400 sm:text-2xl md:text-4xl">
        Nous donnons <br />
        Vie a vos projets <br />
        Chez
        <span className="inline-block -skew-x-[18deg] pl-2 font-black text-neutral-950">
          WANTECH.
        </span>
      </h2>
    </div>
  );
};

const ScrollArrow = () => {
  return (
    <>
      <div className="absolute hidden text-xs -translate-y-1/2 left-4 top-1/2 lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          CREATIVITE
        </span>
        <FiArrowDown className="mx-auto" />
      </div>
      <div className="absolute hidden text-xs -translate-y-1/2 right-4 top-1/2 lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          INNOVATION
        </span>
        <FiArrowDown className="mx-auto" />
      </div>
    </>
  );
};