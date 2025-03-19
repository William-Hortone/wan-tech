import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import images from "./../../constants/images";

export default function ViewParallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: images.img4,
  },
  {
    title: "Cursor",
    link: "",
    thumbnail: images.project1,
  },
  {
    title: "Rogue",
    link: "",
    thumbnail: images.img3,
  },

  {
    title: "Editorially",
    link: "",
    thumbnail: images.img7,
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail: images.img6,
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail: images.img2,
  },

  {
    title: "Algochurn",
    link: "",
    thumbnail: images.img8,
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail: images.img9,
  },
  {
    title: "Tailwind Master Kit",
    link: "",
    thumbnail: images.img5,
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail: images.img9,
  },
  {
    title: "Renderwork Studio",
    link: "",
    thumbnail: images.img1,
  },

  {
    title: "Creme Digital",
    link: "",
    thumbnail: images.img3,
  },
  {
    title: "Golden Bells Academy",
    link: "",
    thumbnail: images.img6,
  },
  {
    title: "Invoker Labs",
    link: "",
    thumbnail: images.img9,
  },
  {
    title: "E Free Invoice",
    link: "",
    thumbnail: images.img4,
  },
];
