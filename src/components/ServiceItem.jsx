import React from "react";

const ServiceItem = ({ title, text, img, bgColor, color, className }) => {
  return (
    <div className={`w-full h-auto 2xl:min-h-64  flex flex-col justify-between p-4 md:p-8 md:flex-row ${className}`} style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col gap-4 w-full md:w-2/4">
        <h2 className="font-fontBase text-start font-bold text-2xl py-2 lg:text-4xl" style={{ color: color }}>{title}</h2>
        <p className="font-opensans text-start text-lg" style={{ color: color }}>{text}</p>
      </div>
      <div className="w-full min-h-44 md:w-1/4 bg-sky-800 ">
        <img src={img} alt="project pic" />
      </div>
    </div>
  );
};

export default ServiceItem;
