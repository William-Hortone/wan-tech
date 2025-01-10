import React from "react";

const CardImg = ({ img, title, link }) => {
  return (
    <a href={link} className="wrapperCardImg" >
      <div className="w-[500px] h-[400px] bg-basic ">
        <img className="w-[100%] h-[100%] cardImg" src={img} alt="project" />
        {/* <h4>{title}</h4> */}
      </div>
    </a>
  );
};

export default CardImg;
