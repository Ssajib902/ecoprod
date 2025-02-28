import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <>
      <div className="mt-10">
        <Parallax
          blur={{ min: -50, max: 50 }}
          bgImage={img}
          bgImageAlt="the menu"
          strength={-200}
        >
          <div className="hero h-[500px] text-black">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-center text-6xl font-bold uppercase font-serif">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Cover;
