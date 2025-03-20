import React from "react";
import { products } from "../../constants/data";
import { HeroParallax } from "../ui/hero-parallax";

export default function ViewParallax() {
  return <HeroParallax products={products} />;
}

