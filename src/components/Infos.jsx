import React from "react";

const Infos = () => {
  return (
    <div className="relative flex items-center w-full max-w-full py-0 overflow-hidden bg--600">
      <div className="flex items-center overflow-hidden max-w-full">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex text-white animate-sliding-move">
            <span className="flex items-center text-[7vw] font-fontBase whitespace-nowrap uppercase">
              Agence de solutions digitales
              <svg
                className="ml-2 w-[6vw] h-[6vw] max-w-[40px] max-h-[40px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                style={{ opacity: 1 }}
              >
                <path
                  d="M39.75 14.25L34.75 5.75L25 11.25V0H15V11.25L5 5.75L0 14.25L9.75 20L0 25.75L5 34.25L15 28.75V40H25V28.75L34.75 34.25L39.75 25.75L29.75 20L39.75 14.25Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infos;
