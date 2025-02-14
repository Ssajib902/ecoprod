import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Importing images
import slide_image_1 from "/src/assets/home/01.jpg";
import slide_image_2 from "/src/assets/home/02.jpg";
import slide_image_3 from "/src/assets/home/03.jpg";
import slide_image_4 from "/src/assets/home/04.jpg";
import slide_image_5 from "/src/assets/home/05.jpg";
import slide_image_6 from "/src/assets/home/06.jpg";
import slide_image_7 from "/src/assets/home/07.jpg";

import fever from "../../../assets/home/fever.jpg"
import gastric from "../../../assets/home/gastric.jpg"
import ointment from "../../../assets/home/ointment.jpg"
import eyeCare from "../../../assets/home/eyeCare.jpg"

import utensilsImg from "../../../assets/home/utensils.jpg"
import spoonsImg from "../../../assets/home/spoons.jpg"
import bowlsImg from "../../../assets/home/bowls.jpg"
import trayImg from "../../../assets/home/tray.jpg"

import muttonImg from "../../../assets/home/meat.jpg"
import chickenImg from "../../../assets/home/chicken.png"

import tshirtImg from "../../../assets/home/tShirts.jpg"
import shirtImg from "../../../assets/home/shirts.jpg"
import womensImg from "../../../assets/home/womens.jpg"
import babyImg from "../../../assets/home/baby.jpg"

import { Link } from "react-router-dom";

const HomeCategory = () => {
  // List of slider images
  const sliderImages = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
  };

  // Function to handle next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div
      className="relative bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${sliderImages[currentSlide]})`,
      }}
    >
      {/* Arrow buttons */}
      <div className="absolute left-4 transform -translate-y-1/2">
        <FaArrowLeft
          onClick={handlePrevSlide}
          className="cursor-pointer text-white text-3xl hover:scale-110"
        />
      </div>
      <div className="absolute right-4 transform -translate-y-1/2">
        <FaArrowRight
          onClick={handleNextSlide}
          className="cursor-pointer text-white text-3xl hover:scale-110"
        />
      </div>

      {/* Categories Section */}
      <div className="p-6 bg-white/80 rounded-lg shadow-lg mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Category 1: Medicines */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-4">Medicines</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center">
                <img
                  src={fever}
                  alt="Fever & Pain"
                  className="w-full h-full border object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-center">Fever & Pain</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={gastric}
                  alt="Gastric"
                  className="w-full h-full border object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-center">Gastric</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={ointment}
                  alt="Ointments"
                  className="w-full h-full border object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-center">Ointments</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={eyeCare}
                  alt="Eye Care"
                  className="w-full h-full border object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-center">Eye Care</p>
              </div>
            </div>
            <a
              href="#"
              className="mt-4 text-blue-500 text-sm hover:underline text-right"
            ></a>
          </div>

          {/* Category 2: Shop for Your Kitchen */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-4">Shop for Your Kitchen</h3>
            <Link to="/order/wooden">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src={utensilsImg}
                    alt="Utensils"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Utensils</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={spoonsImg}
                    alt="Spoons"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Spoons</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={bowlsImg}
                    alt="Bowls"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Bowls</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={trayImg}
                    alt="Tray"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Tray</p>
                </div>
              </div>
            </Link>
            <a
              href="#"
              className="mt-4 text-blue-500 text-sm hover:underline text-right"
            ></a>
          </div>

          {/* Category 3: Get Your Protein */}
          <Link to="/order/meats">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
              <h3 className="text-lg font-bold mb-4">Get Your Protein</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src={muttonImg}
                    alt="Mutton"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Mutton</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={chickenImg}
                    alt="Chicken"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Chicken</p>
                </div>
              </div>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm hover:underline text-right"
              ></a>
            </div>
          </Link>

          {/* Category 4: Shop for Your Kitchen */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-4">Fashion with Trends</h3>
            <Link to="/order/clothes">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src={tshirtImg}
                    alt="t-shirt"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">T-Shirts</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={shirtImg}
                    alt="shirt image"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Shirts</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={womensImg}
                    alt="Womens clothes"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Womens</p>
                </div>
                <div className="flex flex-col items-center">
                  <img

                    src={babyImg}
                    alt="Baby Clothes"
                    className="w-full h-full border object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">Baby</p>
                </div>
              </div>
            </Link>
            <a
              href="#"
              className="mt-4 text-blue-500 text-sm hover:underline text-right"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
