import React from "react";
import { Cover } from "../ui/cover";
import { Link } from "react-router-dom";

export default function SpeedText() {
  return (
    <div>
      <h2 className="relative z-10 py-6 mx-auto mt-6 text-4xl font-semibold text-center text-transparent md:text-4xl lg:text-6xl max-w-7xl bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Explorez notre portfolio et plongez au cœur de nos réalisations,
        reflétant notre expertise, notre créativité et notre engagement envers
        l’excellence.
        <br /> Alors, <Cover> <Link to='/projects'>cliquez ici </Link> </Cover>
      </h2>
    </div>
  );
}
